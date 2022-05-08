import { ScrapLogInterface } from '../interfaces/scrap-log.interface';

class CallsDto {
  total: number;
  [key: string]: number;
}

export class ReturnSvcScrapLogDto {
  calls: CallsDto;
  data: ScrapLogInterface[];
}
