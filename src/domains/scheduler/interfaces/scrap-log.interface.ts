import { ScrapStatusEnum } from '../../../enums/scrap-status.enum';
import { VendorEnum } from '../../../enums/vendor.enum';

export interface ScrapLogInterface {
  id: string;
  vendorName: VendorEnum;
  startedAt?: Date;
  errorMessage?: string;
  finishedAt?: Date;
  status: ScrapStatusEnum;
}
