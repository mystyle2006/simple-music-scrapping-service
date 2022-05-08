import { CronExpression } from '@nestjs/schedule';

export const getCronExpression = (): string => CronExpression.EVERY_10_MINUTES;
