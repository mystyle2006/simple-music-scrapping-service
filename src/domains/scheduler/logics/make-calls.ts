import { CallsDto } from '../dto/return-svc-scrap-log.dto';
import { ScrapLogInterface } from '../interfaces/scrap-log.interface';

export const makeCalls = (
  vendorNames: string[],
  logs: ScrapLogInterface[],
): CallsDto =>
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
