import { ScrapLogInterface } from '../domains/scheduler/interfaces/scrap-log.interface';
import { ScrapLogSummaryInterface } from '../domains/scheduler/interfaces/scrap-log-summary.interface';
import { CommonDatabase } from '../utils/common.database';

class ScrapLogDatabase extends CommonDatabase {
  private scrapPrefix = 'scrap';

  constructor() {
    super();
  }

  find(): ScrapLogSummaryInterface {
    return this.get<ScrapLogSummaryInterface>(this.scrapPrefix);
  }

  create(key: string, data: ScrapLogInterface): void {
    const path = [this.scrapPrefix, key].join('/');
    this.push<ScrapLogInterface>(path, data);
  }

  update(key: string, data: Partial<ScrapLogInterface>): void {
    const path = [this.scrapPrefix, key].join('/');
    const log = this.get<ScrapLogInterface>(path);
    this.push<ScrapLogInterface>(path, {
      ...log,
      ...data,
    });
  }
}

export const scrapLogDatabase = new ScrapLogDatabase();
