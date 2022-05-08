import { Test, TestingModule } from '@nestjs/testing';

import { CacheService } from '../../cache/cache.service';
import { albumDatabase } from '../../database/album.database';
import { musicDatabase } from '../../database/music.database';
import { VendorEnum } from '../../enum/vendor.enum';
import { albumStub } from '../scheduler/_test/stubs/album.stub';
import { albumIdStub } from '../scheduler/_test/stubs/album-id.stub';
import { musicStub } from '../scheduler/_test/stubs/music.stub';
import { musicAlbumStub } from './_test/stubs/music-album.stub';
import { ReturnSvcFindOneDto } from './dto/return-svc-find-one.dto';
import { MusicInterface } from './interfaces/music.interface';
import { MusicChartService } from './music-chart.service';

jest.mock('../../cache/cache.service');

describe('MusicChartService', () => {
  let service: MusicChartService;
  let cacheService: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicChartService, CacheService],
    }).compile();

    service = module.get<MusicChartService>(MusicChartService);
    cacheService = module.get<CacheService>(CacheService);
    jest.clearAllMocks();
  });

  describe('find', () => {
    let output: ReturnSvcFindOneDto[];

    describe('캐시가 있을 경우', () => {
      beforeEach(async () => {
        jest.spyOn(cacheService, 'find').mockResolvedValue([
          {
            album: albumStub[albumIdStub],
            music: musicStub[albumIdStub],
          },
        ]);
        jest.spyOn(musicDatabase, 'find').mockReturnValue(null);

        output = await service.find(VendorEnum.MELON);
      });

      it('데이터베이스에 접근하지 않고 early 반환 체크', () => {
        expect(musicDatabase.find).not.toBeCalled();
      });

      it('결과물 체크', () => {
        expect(output).toEqual([
          {
            music: {
              album: '토스앨범',
              albumId: '050505',
              singer: '토스',
              name: '토스',
              ranking: 1,
            },
            album: {
              publisher: '토스엔터테이너',
              agency: '토스',
            },
          },
        ]);
      });
    });
    describe('캐시가 없을 경우', () => {
      beforeEach(async () => {
        jest.spyOn(cacheService, 'find').mockResolvedValue(null);
        jest.spyOn(musicDatabase, 'find').mockReturnValue(musicStub);
        jest.spyOn(albumDatabase, 'find').mockReturnValue(albumStub);

        output = await service.find(VendorEnum.MELON);
      });

      it('데이터베이스에 접근하여 반환 체크', () => {
        expect(musicDatabase.find).toHaveBeenCalledWith('MELON');
      });

      it('데이터베이스에 접근하여 반환 체크', () => {
        expect(albumDatabase.find).toHaveBeenCalledWith('MELON');
      });

      it('캐시하는지 체크', () => {
        expect(cacheService.create).toHaveBeenCalledWith(
          'MELON_MUSIC_ALBUM_CACHE',
          [
            {
              music: {
                album: '토스앨범',
                albumId: '050505',
                singer: '토스',
                name: '토스',
                ranking: 1,
              },
              album: {
                publisher: '토스엔터테이너',
                agency: '토스',
              },
            },
          ],
        );
      });

      it('결과물 체크', () => {
        expect(output).toEqual([
          {
            music: {
              album: '토스앨범',
              albumId: '050505',
              singer: '토스',
              name: '토스',
              ranking: 1,
            },
            album: {
              publisher: '토스엔터테이너',
              agency: '토스',
            },
          },
        ]);
      });
    });
  });

  describe('findMusics', () => {
    let output: MusicInterface[];

    describe('캐시가 있을 경우', () => {
      beforeEach(async () => {
        jest
          .spyOn(cacheService, 'find')
          .mockResolvedValue([musicStub[albumIdStub]]);
        jest.spyOn(musicDatabase, 'find').mockReturnValue(null);

        output = await service.findMusics(VendorEnum.MELON);
      });

      it('데이터베이스에 접근하지 않고 early 반환 체크', () => {
        expect(musicDatabase.find).not.toBeCalled();
      });

      it('결과물 체크', () => {
        expect(output).toEqual([
          {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
        ]);
      });
    });

    describe('캐시가 없을 경우', () => {
      beforeEach(async () => {
        jest.spyOn(cacheService, 'find').mockResolvedValue(null);
        jest.spyOn(musicDatabase, 'find').mockReturnValue(musicStub);

        output = await service.findMusics(VendorEnum.MELON);
      });

      it('cache 된 데이터를 가져오는지 체크', () => {
        expect(cacheService.find).toHaveBeenCalledWith('MELON_MUSIC_CACHE');
      });

      it('데이터베이스에 접근하여 반환하는지 체크', () => {
        expect(musicDatabase.find).toHaveBeenCalledWith('MELON');
      });

      it('캐시하는지 체크', () => {
        expect(cacheService.create).toHaveBeenCalledWith('MELON_MUSIC_CACHE', [
          {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
        ]);
      });

      it('결과물 체크', () => {
        expect(output).toEqual([
          {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
        ]);
      });
    });
  });

  describe('findOne', () => {
    let output: ReturnSvcFindOneDto;

    describe('캐시가 있을 경우', () => {
      beforeEach(async () => {
        jest.spyOn(cacheService, 'find').mockResolvedValue(musicAlbumStub);
        jest.spyOn(musicDatabase, 'findById').mockReturnValue(null);

        output = await service.findOne({
          vendor: VendorEnum.MELON,
          musicId: albumIdStub,
        });
      });

      it('cache 된 데이터를 가져오는지 체크', () => {
        expect(cacheService.find).toHaveBeenCalledWith('MELON_050505');
      });

      it('데이터베이스에 접근하지 않고 early 반환 체크', () => {
        expect(musicDatabase.findById).not.toBeCalled();
      });

      it('결과물 체크', () => {
        expect(output).toEqual({
          music: {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
          album: {
            publisher: '토스엔터테이너',
            agency: '토스',
          },
        });
      });
    });

    describe('캐시가 없을 경우', () => {
      beforeEach(async () => {
        jest.spyOn(cacheService, 'find').mockResolvedValue(null);
        jest
          .spyOn(musicDatabase, 'findById')
          .mockReturnValue(musicStub[albumIdStub]);
        jest
          .spyOn(albumDatabase, 'findById')
          .mockReturnValue(albumStub[albumIdStub]);

        output = await service.findOne({
          vendor: VendorEnum.MELON,
          musicId: albumIdStub,
        });
      });

      it('music 데이터베이스 호출하는지 체크', () => {
        expect(musicDatabase.findById).toHaveBeenCalledWith('MELON/050505');
      });

      it('album 데이터베이스 호출하는지 체크', () => {
        expect(albumDatabase.findById).toHaveBeenCalledWith('MELON/050505');
      });

      it('캐시하는지 체크', () => {
        expect(cacheService.create).toHaveBeenCalledWith('MELON_050505', {
          music: {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
          album: {
            publisher: '토스엔터테이너',
            agency: '토스',
          },
        });
      });

      it('결과물 체크', () => {
        expect(output).toEqual({
          music: {
            album: '토스앨범',
            albumId: '050505',
            singer: '토스',
            name: '토스',
            ranking: 1,
          },
          album: {
            publisher: '토스엔터테이너',
            agency: '토스',
          },
        });
      });
    });
  });
});
