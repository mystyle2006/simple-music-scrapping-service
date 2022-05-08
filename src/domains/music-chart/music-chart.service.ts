import { Injectable } from '@nestjs/common';

import { CacheService } from '../../cache/cache.service';
import { albumDatabase } from '../../database/album.database';
import { musicDatabase } from '../../database/music.database';
import { VendorEnum } from '../../enum/vendor.enum';
import {
  getMusicAlbumCacheName,
  getMusicCacheName,
} from '../../utils/get-cache-name';
import { GetSvcFindOneDto } from './dto/get-svc-find-one.dto';
import { ReturnSvcFindOneDto } from './dto/return-svc-find-one.dto';
import { MusicInterface } from './interfaces/music.interface';

@Injectable()
export class MusicChartService {
  constructor(private readonly cacheService: CacheService) {}

  async findOne({
    vendor,
    musicId,
  }: GetSvcFindOneDto): Promise<ReturnSvcFindOneDto> {
    const key = [vendor, musicId].join('_');
    const cached = await this.cacheService.find<ReturnSvcFindOneDto>(key);
    if (cached) {
      return cached;
    }

    const music = musicDatabase.findById([vendor, musicId].join('/'));
    const album = albumDatabase.findById([vendor, musicId].join('/'));
    const result = {
      music,
      album,
    };

    await this.cacheService.create(key, result);
    return result;
  }

  async findMusics(vendor: VendorEnum): Promise<MusicInterface[]> {
    const key = getMusicCacheName(vendor);
    const cached = await this.cacheService.find<MusicInterface[]>(key);
    if (cached) {
      return cached;
    }

    const musics = musicDatabase.find(vendor);
    const result = Object.values(musics);

    await this.cacheService.create(key, result);
    return result;
  }

  async find(vendor: VendorEnum): Promise<ReturnSvcFindOneDto[]> {
    const key = getMusicAlbumCacheName(vendor);
    const cached = await this.cacheService.find<ReturnSvcFindOneDto[]>(key);
    if (cached) {
      return cached;
    }

    const musics = musicDatabase.find(vendor);
    const albums = albumDatabase.find(vendor);
    const result = Object.values(musics).map(
      (music): ReturnSvcFindOneDto => ({
        music,
        album: albums[music.albumId],
      }),
    );

    await this.cacheService.create(key, result);
    return result;
  }
}
