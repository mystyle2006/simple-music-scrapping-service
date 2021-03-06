import { Process, Processor } from '@nestjs/bull';
import { v4 as uuidv4 } from 'uuid';

import { CacheService } from '../../../cache/cache.service';
import { albumDatabase } from '../../../database/album.database';
import { musicDatabase } from '../../../database/music.database';
import { scrapLogDatabase } from '../../../database/scrap-log.database';
import { queueDictionary } from '../../../dictionary/queue.dictionary';
import { ScrapStatusEnum } from '../../../enums/scrap-status.enum';
import {
  getMusicAlbumCacheName,
  getMusicCacheName,
} from '../../../utils/get-cache-name';
import { LoggerWrapper } from '../../../utils/logger.wrapper';
import { MusicJobInterface } from '../interfaces/music-job.interface';
import { MusicSummaryInterface } from '../interfaces/music-summary.interface';
import { scrapAlbums } from '../logics/scrap-albums';
import { scrapMusic } from '../logics/scrap-music';

@Processor(queueDictionary.MUSIC_SCRAPPING)
export class MusicScrappingConsumer extends LoggerWrapper {
  constructor(private readonly cacheService: CacheService) {
    super(MusicScrappingConsumer.name);
  }

  @Process()
  async scrapping({ data }: MusicJobInterface) {
    const scrapLogId = uuidv4();

    try {
      this.logger.log('>>> start scrapping target ->', data.name);
      scrapLogDatabase.create(scrapLogId, {
        id: scrapLogId,
        vendorName: data.name,
        status: ScrapStatusEnum.RUNNING,
        startedAt: new Date(),
      });

      const musics = await scrapMusic(data.music);
      musicDatabase.create(`${data.name}`, musics);

      const albums = await scrapAlbums(data.album, Object.keys(musics));
      albumDatabase.create(`${data.name}`, albums);

      const hasChange = await this.cacheService.compare<MusicSummaryInterface>(
        getMusicCacheName(data.name),
        musics,
      );
      if (hasChange) {
        await this.cacheService.delete(getMusicCacheName(data.name));
        await this.cacheService.delete(getMusicAlbumCacheName(data.name));
      }

      scrapLogDatabase.update(scrapLogId, {
        status: ScrapStatusEnum.DONE,
        finishedAt: new Date(),
      });
      this.logger.log('>>> end scrapping target ->', data.name);
    } catch (error) {
      this.logger.error(error);
      scrapLogDatabase.update(scrapLogId, {
        status: ScrapStatusEnum.FAIL,
        errorMessage: error.message,
        finishedAt: new Date(),
      });
      this.logger.log('>>> error scrapping target ->', data.name);
    }
  }
}
