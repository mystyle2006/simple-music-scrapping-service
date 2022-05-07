import { Injectable } from '@nestjs/common';

import { albumDatabase } from '../../database/album.database';
import { musicDatabase } from '../../database/music.database';
import { VendorEnum } from '../../enum/vendor.enum';
import { GetSvcFindOneDto } from './dto/get-svc-find-one.dto';
import { ReturnSvcFindOneDto } from './dto/return-svc-find-one.dto';
import { MusicInterface } from './interfaces/music.interface';

@Injectable()
export class MusicChartService {
  findOne({ vendor, musicId }: GetSvcFindOneDto): ReturnSvcFindOneDto {
    const music = musicDatabase.findById([vendor, musicId].join('/'));
    const album = albumDatabase.findById([vendor, musicId].join('/'));
    return {
      music,
      album,
    };
  }

  findMusics(vendor: VendorEnum): MusicInterface[] {
    const musics = musicDatabase.find(vendor);
    return Object.values(musics);
  }

  find(vendor: VendorEnum): ReturnSvcFindOneDto[] {
    const musics = musicDatabase.find(vendor);
    const albums = albumDatabase.find(vendor);
    return Object.values(musics).map(
      (music): ReturnSvcFindOneDto => ({
        music,
        album: albums[music.albumId],
      }),
    );
  }
}
