import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuidv4 } from 'uuid';

import { CacheService } from '../../../cache/cache.service';
import { albumDatabase } from '../../../database/album.database';
import { musicDatabase } from '../../../database/music.database';
import { scrapLogDatabase } from '../../../database/scrap-log.database';
import { vendorInformationDictionary } from '../../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../../enums/vendor.enum';
import { albumIdStub } from '../../music-chart/_test/stubs/album-id.stub';
import { albumSummaryStub } from '../../music-chart/_test/stubs/album-summary.stub';
import { musicSummaryStub } from '../../music-chart/_test/stubs/music-summary.stub';
import * as ScrapAlbumsModule from '../logics/scrap-albums';
import * as ScrapMusicModule from '../logics/scrap-music';
import { MusicScrappingConsumer } from './music-scrapping.consumer';

jest.mock('uuid');
jest.mock('../../../cache/cache.service');

describe('music-scrapping.consumer.spec.ts', () => {
  let musicScrappingConsumer: MusicScrappingConsumer;
  const mockUuid = 'uuid';
  const mockDate = new Date('2020-01-01');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicScrappingConsumer, CacheService],
    }).compile();

    musicScrappingConsumer = module.get<MusicScrappingConsumer>(
      MusicScrappingConsumer,
    );

    jest.spyOn(scrapLogDatabase, 'create').mockReturnValue(null);
    jest.spyOn(scrapLogDatabase, 'update').mockReturnValue(null);
    jest.spyOn(musicDatabase, 'create').mockReturnValue(null);
    jest.spyOn(albumDatabase, 'create').mockReturnValue(null);
    jest
      .spyOn(ScrapAlbumsModule, 'scrapAlbums')
      .mockResolvedValue(albumSummaryStub);
    jest
      .spyOn(ScrapMusicModule, 'scrapMusic')
      .mockResolvedValue(musicSummaryStub);
    uuidv4.mockImplementation(() => mockUuid);
    jest.useFakeTimers('modern').setSystemTime(mockDate);
  });

  describe('???????????? ??? consumer ??????????????? ?????????', () => {
    beforeEach(async () => {
      jest.spyOn(ScrapMusicModule, 'scrapMusic').mockImplementation(() => {
        throw new InternalServerErrorException(new Error('fail!!'));
      });

      await musicScrappingConsumer.scrapping({
        data: vendorInformationDictionary[VendorEnum.MELON],
      });
    });

    it('???????????? ?????? ?????? ??????', () => {
      expect(scrapLogDatabase.update).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'FAIL',
        errorMessage: 'fail!!',
        finishedAt: mockDate,
      });
    });
  });

  describe('???????????? ??? consumer ???????????? ?????????', () => {
    beforeEach(async () => {
      await musicScrappingConsumer.scrapping({
        data: vendorInformationDictionary[VendorEnum.MELON],
      });
    });

    it('???????????? ?????? ?????? ??????', () => {
      expect(scrapLogDatabase.create).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'RUNNING',
        startedAt: mockDate,
      });
    });

    it('?????? ???????????? ??????', () => {
      expect(ScrapMusicModule.scrapMusic).toHaveBeenCalledWith({
        url: 'https://www.melon.com/chart/index.htm',
        target: '.service_list_song table tbody tr',
        rankTarget: 'td:nth-of-type(2) div span:first',
        nameTarget: 'td:nth-of-type(6) div div div:nth-of-type(1) span a',
        singerTarget: 'td:nth-of-type(6) div div div:nth-of-type(2) span a',
        albumTarget: 'td:nth-of-type(7) div div div:first a',
        albumIdTarget: 'td:nth-of-type(7) div div div:first',
        albumIdPrefix: 'goAlbumDetail',
      });
    });

    it('?????? ???????????? ??????', () => {
      expect(ScrapAlbumsModule.scrapAlbums).toHaveBeenCalledWith(
        {
          url: 'https://www.melon.com/album/detail.htm?albumId=',
          target: '.section_info .meta .list',
          publisherTarget: 'dd:nth-of-type(3)',
          agencyTarget: 'dd:nth-of-type(4)',
        },
        ['050505'],
      );
    });

    it('?????? ?????????????????? ??????', () => {
      expect(musicDatabase.create).toHaveBeenCalledWith('MELON', {
        '050505': {
          album: '????????????',
          albumId: albumIdStub,
          singer: '??????',
          name: '??????',
          ranking: 1,
        },
      });
    });

    it('?????? ?????????????????? ??????', () => {
      expect(albumDatabase.create).toHaveBeenCalledWith('MELON', {
        '050505': {
          publisher: '?????????????????????',
          agency: '??????',
        },
      });
    });

    it('???????????? ?????? ????????? ??????', () => {
      expect(scrapLogDatabase.update).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'DONE',
        finishedAt: mockDate,
      });
    });
  });
});
