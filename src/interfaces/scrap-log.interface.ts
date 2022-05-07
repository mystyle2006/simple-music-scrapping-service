import { ScrapStatusEnum } from '../enum/scrap-status.enum';
import { VendorEnum } from '../enum/vendor.enum';

export interface ScrapLogInterface {
  vendorName: VendorEnum;
  startedAt?: Date;
  errorMessage?: string;
  finishedAt?: Date;
  status: ScrapStatusEnum;
}
