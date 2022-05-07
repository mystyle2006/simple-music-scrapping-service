import { VendorEnum } from '../../../enum/vendor.enum';

export interface GetSvcFindOneDto {
  vendor: VendorEnum;
  musicId: string;
}
