import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuidv4 } from 'uuid';

import { albumDatabase } from '../../../database/album.database';
import { musicDatabase } from '../../../database/music.database';
import { scrapLogDatabase } from '../../../database/scrap-log.database';
import { vendorInformationDictionary } from '../../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../../enum/vendor.enum';
import { albumIdStub } from '../../music-chart/_test/stubs/album-id.stub';
import { albumSummaryStub } from '../../music-chart/_test/stubs/album-summary.stub';
import { musicSummaryStub } from '../../music-chart/_test/stubs/music-summary.stub';
import * as ScrapAlbumsModule from '../logics/scrap-albums';
import * as ScrapMusicModule from '../logics/scrap-music';
import { MusicScrappingConsumer } from './music-scrapping.consumer';

jest.mock('uuid');

describe('music-scrapping.consumer.spec.ts', () => {
  let musicScrappingConsumer: MusicScrappingConsumer;
  const mockUuid = 'uuid';
  const mockDate = new Date('2020-01-01');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicScrappingConsumer],
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

  describe('스크래핑 큐 consumer 비정상적인 케이스', () => {
    beforeEach(async () => {
      jest.spyOn(ScrapMusicModule, 'scrapMusic').mockImplementation(() => {
        throw new InternalServerErrorException(new Error('fail!!'));
      });

      await musicScrappingConsumer.scrapping({
        data: vendorInformationDictionary[VendorEnum.MELON],
      });
    });

    it('스크랩핑 로그 실패 체크', () => {
      expect(scrapLogDatabase.update).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'FAIL',
        errorMessage: 'fail!!',
        finishedAt: mockDate,
      });
    });
  });

  describe('스크래핑 큐 consumer 정상적인 케이스', () => {
    beforeEach(async () => {
      await musicScrappingConsumer.scrapping({
        data: vendorInformationDictionary[VendorEnum.MELON],
      });
    });

    it('스크랩핑 로그 생성 체크', () => {
      expect(scrapLogDatabase.create).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'RUNNING',
        startedAt: mockDate,
      });
    });

    it('뮤직 스크랩핑 체크', () => {
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

    it('앨범 스크랩핑 체크', () => {
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

    it('뮤직 데이터베이스 저장', () => {
      expect(musicDatabase.create).toHaveBeenCalledWith('MELON', {
        '050505': {
          album: '토스앨범',
          albumId: albumIdStub,
          singer: '토스',
          name: '토스',
          ranking: 1,
        },
      });
    });

    it('앨범 데이터베이스 저장', () => {
      expect(albumDatabase.create).toHaveBeenCalledWith('MELON', {
        '050505': {
          publisher: '토스엔터테이너',
          agency: '토스',
        },
      });
    });

    it('스크래핑 로그 완료로 수정', () => {
      expect(scrapLogDatabase.update).toHaveBeenCalledWith(mockUuid, {
        vendorName: 'MELON',
        status: 'DONE',
        finishedAt: mockDate,
      });
    });
  });
});
