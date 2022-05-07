import { Module } from '@nestjs/common';

import { MusicChartController } from './music-chart.controller';
import { MusicChartService } from './music-chart.service';

@Module({
  controllers: [MusicChartController],
  providers: [MusicChartService],
})
export class MusicChartModule {}
