import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { VendorEnum } from '../../enum/vendor.enum';
import { ToUpperCasePipe } from '../../utils/to-upper-case.pipe';
import { MusicChartService } from './music-chart.service';

@ApiTags('뮤직 차트')
@Controller('music-chart')
export class MusicChartController {
  constructor(private readonly musicChartService: MusicChartService) {}

  @ApiOperation({
    summary: '상세 정보 (음원 정보 + 발매사, 기획사 정보 추가)',
  })
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
