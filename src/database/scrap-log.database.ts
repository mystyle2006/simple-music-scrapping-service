import { ScrapLogInterface } from '../interfaces/scrap-log.interface';
import { CommonDatabase } from '../utils/common.database';

class ScrapLogDatabase extends CommonDatabase {
  private scrapPrefix = 'scrap';

  constructor() {
    super();
  }

  create(key: string, data: ScrapLogInterface): void {
    const path = [this.scrapPrefix, key].join('/');
    this.push<ScrapLogInterface>(path, data);
  }

  update(key: string, data: ScrapLogInterface): void {
    const path = [this.scrapPrefix, key].join('/');
    const log = this.get<ScrapLogInterface>(path);
    this.push<ScrapLogInterface>(path, {
      ...log,
      ...data,
    });
  }
}

export const scrapLogDatabase = new ScrapLogDatabase();
