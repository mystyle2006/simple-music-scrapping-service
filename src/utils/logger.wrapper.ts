import { Logger } from '@nestjs/common';

export class LoggerWrapper {
  protected readonly logger: Logger;
  constructor(name: string) {
    this.logger = new Logger(name);
  }
}
