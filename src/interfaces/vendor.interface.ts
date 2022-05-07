import { VendorEnum } from '../enum/vendor.enum';
import { AlbumScrapInterface } from './album-scrap.interface';
import { MusicScrapInterface } from './music-scrap.interface';

export interface VendorInterface {
  name: VendorEnum;
  music?: MusicScrapInterface;
  album?: AlbumScrapInterface;
}
