import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { queueDictionary } from '../../dictionary/queue.dictionary';
import { ScrappingConsumer } from './consumers/scrapping.consumer';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: queueDictionary.MUSIC_SCRAPPING,
    }),
  ],
  providers: [SchedulerService, ScrappingConsumer],
})
export class SchedulerModule {}
