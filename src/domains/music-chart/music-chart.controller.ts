import { Controller, Get, Param } from '@nestjs/common';

import { VendorEnum } from '../../enum/vendor.enum';
import { ToUpperCasePipe } from '../../utils/to-upper-case.pipe';
import { MusicChartService } from './music-chart.service';

@Controller('music-chart')
export class MusicChartController {
  constructor(private readonly musicChartService: MusicChartService) {}
  @Get('/:vendor/song/:musicId')
  findOne(
    @Param('vendor', ToUpperCasePipe) vendor: VendorEnum,
    @Param('musicId') musicId: string,
  ) {
    return this.musicChartService.findOne({
      vendor,
      musicId,
    });
  }
}
