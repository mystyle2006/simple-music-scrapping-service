import { Controller, Get } from '@nestjs/common';

import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly schedulerService: SchedulerService) {}

  @Get('/run')
  async run(): Promise<string> {
    await this.schedulerService.scrap();
    return '음원순위 스크래핑이 수동으로 동작하였습니다.';
  }
}
