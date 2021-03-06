import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

import { diff } from '../utils/diff';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async find<T>(key: string): Promise<T> {
    const cachedData = await this.cacheManager.get<T>(key);
    if (cachedData) {
      console.info('>>> 캐시된 데이터를 가져옵니다.');
      return cachedData;
    }

    return null;
  }

  async create<T>(
    key: string,
    data: T,
    options?: CachingConfig,
  ): Promise<void> {
    await this.cacheManager.set(key, data, options);
  }

  async delete(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  async compare<T>(key: string, target: T): Promise<boolean> {
    const cached = await this.find<T>(key);
    if (!cached) {
      return false;
    }

    if (!diff<T>(cached, target)) {
      return false;
    }

    return true;
  }
}
