import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bull';

import { queueDictionary } from '../../dictionary/queue.dictionary';

@Injectable()
export class SchedulerService {
  constructor(
    @InjectQueue(queueDictionary.MUSIC_SCRAPPING) private scrappingQueue: Queue,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.scrappingQueue.add({
      targetUrl: 'https://example.com',
    });
  }
}
