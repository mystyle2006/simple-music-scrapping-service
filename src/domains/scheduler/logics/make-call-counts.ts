import * as R from 'ramda';

import { CallCountsDto } from '../dto/return-svc-scrap-log.dto';
import { ScrapLogInterface } from '../interfaces/scrap-log.interface';

export const makeCallCounts = (logs: ScrapLogInterface[]): CallCountsDto => ({
  ...R.countBy(R.toLower)(R.pluck('vendorName')(logs)),
  total: logs.length,
});
