import { cacheNameDictionary } from '../dictionary/cache-name.dictionary';
import { VendorEnum } from '../enum/vendor.enum';

export const getMusicCacheName = (vendor: VendorEnum) =>
  [vendor, cacheNameDictionary.MUSIC_CACHE].join('_');

export const getMusicAlbumCacheName = (vendor: VendorEnum) =>
  [vendor, cacheNameDictionary.MUSIC_ALBUM_CACHE].join('_');
