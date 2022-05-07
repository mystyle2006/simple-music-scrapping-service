import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { SchedulerService } from './scheduler.service';

@ApiTags('default')
@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly schedulerService: SchedulerService) {}

  @ApiOperation({
    summary: '(테스트용) 수동으로 스크래핑 실행하기',
  })
  @Get('/run')
  async run(): Promise<string> {
    await this.schedulerService.scrap();
    return '음원순위 스크래핑이 수동으로 동작하였습니다.';
  }
}
