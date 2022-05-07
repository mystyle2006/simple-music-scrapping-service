import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { VendorEnum } from '../../enum/vendor.enum';
import { ToUpperCasePipe } from '../../utils/to-upper-case.pipe';
import { ReturnSvcFindOneDto } from './dto/return-svc-find-one.dto';
import { MusicInterface } from './interfaces/music.interface';
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
  ): ReturnSvcFindOneDto {
    return this.musicChartService.findOne({
      vendor,
      musicId,
    });
  }

  @ApiOperation({
    summary: '음원 목록',
  })
  @Get('/:vendor/summary')
  findMusics(
    @Param('vendor', ToUpperCasePipe) vendor: VendorEnum,
  ): MusicInterface[] {
    return this.musicChartService.findMusics(vendor);
  }

  @ApiOperation({
    summary: '음원 목록 + 상세 정보',
  })
  @Get('/:vendor/songs')
  find(
    @Param('vendor', ToUpperCasePipe) vendor: VendorEnum,
  ): ReturnSvcFindOneDto[] {
    return this.musicChartService.find(vendor);
  }
}
