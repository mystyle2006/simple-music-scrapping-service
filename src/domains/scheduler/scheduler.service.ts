import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Queue } from 'bull';

import { vendorDatabase } from '../../database/vendor.database';
import { queueDictionary } from '../../dictionary/queue.dictionary';
import { getCronExpression } from './logics/get-cron-expression';

@Injectable()
export class SchedulerService {
  constructor(
    @InjectQueue(queueDictionary.MUSIC_SCRAPPING) private scrappingQueue: Queue,
  ) {}

  @Cron(getCronExpression())
  scrap() {
    const vendors = vendorDatabase.find();
    vendors.forEach((vendor) =>
      this.scrappingQueue.add(vendor, {
        attempts: 0,
        removeOnComplete: true,
        removeOnFail: true,
      }),
    );
  }
}
