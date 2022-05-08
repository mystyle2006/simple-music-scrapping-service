import { VendorEnum } from '../../../enums/vendor.enum';

export interface GetSvcFindOneDto {
  vendor: VendorEnum;
  musicId: string;
}
