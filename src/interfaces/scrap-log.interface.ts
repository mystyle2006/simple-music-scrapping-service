import { ScrapStatusEnum } from '../enum/scrap-status.enum';
import { VendorEnum } from '../enum/vendor.enum';

export interface ScrapLogInterface {
  vendorName: VendorEnum;
  startedAt?: Date;
  finishedAt?: Date;
  status: ScrapStatusEnum;
}
