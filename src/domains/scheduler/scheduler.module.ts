import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { queueDictionary } from '../../dictionary/queue.dictionary';
import { MusicScrappingConsumer } from './consumers/music-scrapping.consumer';
import { SchedulerController } from './scheduler.controller';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: queueDictionary.MUSIC_SCRAPPING,
    }),
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService, MusicScrappingConsumer],
})
export class SchedulerModule {}
