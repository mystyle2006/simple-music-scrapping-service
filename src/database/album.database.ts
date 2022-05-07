import { AlbumSummaryInterface } from '../interfaces/album-summary.interface';
import { CommonDatabase } from '../utils/common.database';

class AlbumDatabase extends CommonDatabase {
  private albumPrefix = 'album';

  constructor() {
    super();
  }

  create(key: string, data: AlbumSummaryInterface): void {
    const path = [this.albumPrefix, key].join('/');

    this.delete(path);
    this.push<AlbumSummaryInterface>(path, data);
  }
}

export const albumDatabase = new AlbumDatabase();
