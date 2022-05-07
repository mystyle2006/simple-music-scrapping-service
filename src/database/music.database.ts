import { MusicSummaryInterface } from '../interfaces/music-summary.interface';
import { CommonDatabase } from '../utils/common.database';

class MusicDatabase extends CommonDatabase {
  private musicPrefix = 'music';

  constructor() {
    super();
  }

  create(key: string, data: MusicSummaryInterface): void {
    const path = [this.musicPrefix, key].join('/');

    this.delete(path);
    this.push<MusicSummaryInterface>(path, data);
  }
}

export const musicDatabase = new MusicDatabase();
