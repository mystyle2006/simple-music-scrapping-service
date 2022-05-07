import { VendorInterface } from '../interfaces/vendor.interface';
import { CommonDatabase } from '../utils/common.database';

class VendorDatabase extends CommonDatabase {
  private vendorPrefix = 'vender';

  constructor() {
    super();
  }

  create(key: string, data: VendorInterface): void {
    const path = [this.vendorPrefix, key].join('/');
    this.delete(path);
    this.push<VendorInterface>(path, data);
  }

  find(): VendorInterface[] {
    const data = this.get<VendorInterface>(this.vendorPrefix);
    return Object.values(data);
  }
}

export const vendorDatabase = new VendorDatabase();
