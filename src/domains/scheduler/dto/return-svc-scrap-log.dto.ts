import { ScrapLogInterface } from '../interfaces/scrap-log.interface';

export class CallCountsDto {
  total: number;
  [key: string]: number;
}

export class ReturnSvcScrapLogDto {
  calls: CallCountsDto;
  data: ScrapLogInterface[];
}
