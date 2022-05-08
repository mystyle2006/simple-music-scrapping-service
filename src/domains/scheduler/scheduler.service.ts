import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Queue } from 'bull';

import { scrapLogDatabase } from '../../database/scrap-log.database';
import { vendorDatabase } from '../../database/vendor.database';
import { queueDictionary } from '../../dictionary/queue.dictionary';
import { ReturnSvcScrapLogDto } from './dto/return-svc-scrap-log.dto';
import { getCronExpression } from './logics/get-cron-expression';
import { makeCalls } from './logics/make-calls';

@Injectable()
export class SchedulerService {
  constructor(
    @InjectQueue(queueDictionary.MUSIC_SCRAPPING) private scrappingQueue: Queue,
  ) {}

  @Cron(getCronExpression())
  scrap(): void {
    const vendors = vendorDatabase.find();
    vendors.forEach((vendor) =>
      this.scrappingQueue.add(vendor, {
        attempts: 0,
        removeOnComplete: true,
        removeOnFail: true,
      }),
    );
  }

  findLogs(): ReturnSvcScrapLogDto {
    const logs = Object.values(scrapLogDatabase.find() || {});
    const vendors = vendorDatabase.find();
    const calls = makeCalls(
      vendors.map((vendor) => vendor.name),
      logs,
    );

    return {
      calls,
      data: logs,
    };
  }
}
