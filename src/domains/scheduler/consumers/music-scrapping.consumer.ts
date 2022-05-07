import { Process, Processor } from '@nestjs/bull';
import { v4 as uuidv4 } from 'uuid';

import { albumDatabase } from '../../../database/album.database';
import { musicDatabase } from '../../../database/music.database';
import { scrapLogDatabase } from '../../../database/scrap-log.database';
import { errorMessageDictionary } from '../../../dictionary/error-message.dictionary';
import { queueDictionary } from '../../../dictionary/queue.dictionary';
import { ScrapStatusEnum } from '../../../enum/scrap-status.enum';
import { VendorEnum } from '../../../enum/vendor.enum';
import { MusicJobInterface } from '../interfaces/music-job.interface';
import { scrapAlbums } from '../logics/scrap-albums';
import { scrapMusic } from '../logics/scrap-music';

@Processor(queueDictionary.MUSIC_SCRAPPING)
export class MusicScrappingConsumer {
  @Process()
  async scrapping({ data }: MusicJobInterface) {
    const scrapLogId = uuidv4();

    try {
      console.info('>>> start scrapping target ->', data.name);
      scrapLogDatabase.create(scrapLogId, {
        vendorName: VendorEnum.MELON,
        status: ScrapStatusEnum.RUNNING,
        startedAt: new Date(),
      });
      const musics = await scrapMusic(data.music);
      if (!Object.keys(musics).length) {
        throw new Error(errorMessageDictionary.MUSIC_SCRAPPING_EMPTY);
      }

      const albums = await scrapAlbums(data.album, Object.keys(musics));
      if (!Object.keys(albums).length) {
        throw new Error(errorMessageDictionary.ALBUM_SCRAPPING_EMPTY);
      }

      musicDatabase.create(`${data.name}`, musics);
      albumDatabase.create(`${data.name}`, albums);

      scrapLogDatabase.update(scrapLogId, {
        vendorName: VendorEnum.MELON,
        status: ScrapStatusEnum.DONE,
        finishedAt: new Date(),
      });
      console.info('>>> end scrapping target ->', data.name);
    } catch (error) {
      scrapLogDatabase.update(scrapLogId, {
        vendorName: VendorEnum.MELON,
        status: ScrapStatusEnum.FAIL,
        errorMessage: error.message,
        finishedAt: new Date(),
      });
      console.info('>>> error scrapping target ->', data.name);
    }
  }
}
