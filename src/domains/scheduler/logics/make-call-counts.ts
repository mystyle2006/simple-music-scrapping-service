import { CallCountsDto } from '../dto/return-svc-scrap-log.dto';
import { ScrapLogInterface } from '../interfaces/scrap-log.interface';

export const makeCallCounts = (
  vendorNames: string[],
  logs: ScrapLogInterface[],
): CallCountsDto =>
  vendorNames.reduce(
    (acc, vendorName) => {
      return {
        ...acc,
        [`${vendorName}`.toLowerCase()]: logs.map(
          (log) => log.vendorName === vendorName,
        ).length,
      };
    },
    {
      total: logs.length,
    },
  );
