import { CacheModule, Global, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { CacheService } from './cache.service';

export const DEFAULT_CACHE_TTL = 60 * 30; // 30분

const redisCacheModule = CacheModule.registerAsync({
  useFactory: () => ({
    store: redisStore,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    ttl: DEFAULT_CACHE_TTL,
  }),
});

@Global()
@Module({
  imports: [redisCacheModule],
  exports: [redisCacheModule, CacheService],
  providers: [CacheService],
})
export class RedisCacheModule {}
