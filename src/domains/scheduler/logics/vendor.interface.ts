import { VendorEnum } from '../../../enum/vendor.enum';
import { AlbumScrapInterface } from '../../../interfaces/album-scrap.interface';
import { MusicScrapInterface } from '../../../interfaces/music-scrap.interface';

export interface VendorInterface {
  name: VendorEnum;
  music?: MusicScrapInterface;
  album?: AlbumScrapInterface;
}
