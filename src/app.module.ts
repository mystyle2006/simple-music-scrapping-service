import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { MusicChartModule } from './domains/music-chart/music-chart.module';
import { SchedulerModule } from './domains/scheduler/scheduler.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    ScheduleModule.forRoot(),
    SchedulerModule,
    MusicChartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
