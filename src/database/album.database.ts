import { AlbumInterface } from '../domains/music-chart/interfaces/album.interface';
import { AlbumSummaryInterface } from '../domains/scheduler/interfaces/album-summary.interface';
import { CommonDatabase } from '../utils/common.database';

class AlbumDatabase extends CommonDatabase {
  private albumPrefix = 'album';

  constructor() {
    super();
  }

  findById(key: string): AlbumInterface {
    const path = [this.albumPrefix, key].join('/');
    return this.get<AlbumInterface>(path);
  }

  create(key: string, data: AlbumSummaryInterface): void {
    const path = [this.albumPrefix, key].join('/');

    this.delete(path);
    this.push<AlbumSummaryInterface>(path, data);
  }
}

export const albumDatabase = new AlbumDatabase();
