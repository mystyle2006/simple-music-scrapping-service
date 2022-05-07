import { MusicInterface } from '../domains/music-chart/interfaces/music.interface';
import { MusicSummaryInterface } from '../domains/scheduler/interfaces/music-summary.interface';
import { CommonDatabase } from '../utils/common.database';

class MusicDatabase extends CommonDatabase {
  private musicPrefix = 'music';

  constructor() {
    super();
  }

  findById(key: string): MusicInterface {
    const path = [this.musicPrefix, key].join('/');
    return this.get<MusicInterface>(path);
  }

  find(key: string): MusicSummaryInterface {
    const path = [this.musicPrefix, key].join('/');
    return this.get<MusicSummaryInterface>(path);
  }

  create(key: string, data: MusicSummaryInterface): void {
    const path = [this.musicPrefix, key].join('/');

    this.delete(path);
    this.push<MusicSummaryInterface>(path, data);
  }
}

export const musicDatabase = new MusicDatabase();
