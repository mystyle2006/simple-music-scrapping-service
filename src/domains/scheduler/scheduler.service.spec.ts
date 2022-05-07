import { BullModule, getQueueToken } from '@nestjs/bull';
import { Test, TestingModule } from '@nestjs/testing';

import { vendorDatabase } from '../../database/vendor.database';
import { queueDictionary } from '../../dictionary/queue.dictionary';
import { vendorInformationDictionary } from '../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../enum/vendor.enum';
import { SchedulerService } from './scheduler.service';

describe('scheduler.service.spec.ts', () => {
  let schedulerService: SchedulerService;
  const queueMockValue = {
    add: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BullModule.registerQueue({
          name: queueDictionary.MUSIC_SCRAPPING,
        }),
      ],
      providers: [SchedulerService],
    })
      .overrideProvider(getQueueToken(queueDictionary.MUSIC_SCRAPPING))
      .useValue(queueMockValue)
      .compile();

    schedulerService = module.get<SchedulerService>(SchedulerService);
  });

  describe('멜론 스크래핑', () => {
    beforeEach(async () => {
      jest
        .spyOn(vendorDatabase, 'find')
        .mockReturnValue([vendorInformationDictionary[VendorEnum.MELON]]);

      await schedulerService.scrap();
    });

    it('큐 add 파라미터 체크', () => {
      expect(queueMockValue.add).toHaveBeenCalledWith(
        {
          name: 'MELON',
          music: {
            url: 'https://www.melon.com/chart/index.htm',
            target: '.service_list_song table tbody tr',
            rankTarget: 'td:nth-of-type(2) div span:first',
            nameTarget: 'td:nth-of-type(6) div div div:nth-of-type(1) span a',
            singerTarget: 'td:nth-of-type(6) div div div:nth-of-type(2) span a',
            albumTarget: 'td:nth-of-type(7) div div div:first a',
            albumIdTarget: 'td:nth-of-type(7) div div div:first',
            albumIdPrefix: 'goAlbumDetail',
          },
          album: {
            url: 'https://www.melon.com/album/detail.htm?albumId=',
            target: '.section_info .meta .list',
            publisherTarget: 'dd:nth-of-type(3)',
            agencyTarget: 'dd:nth-of-type(4)',
          },
        },
        {
          attempts: 0,
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
    });
  });
});
