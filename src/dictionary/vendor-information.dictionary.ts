import { VendorEnum } from '../enum/vendor.enum';

export const vendorInformationDictionary = {
  [VendorEnum.MELON]: {
    name: VendorEnum.MELON,
    music: {
      url: 'https://www.melon.com/chart/index.htm',
      target: '.service_list_song table tbody tr',
      rankTarget: 'td:nth-of-type(2) div span:first',
      nameTarget: 'td:nth-of-type(6) div div div:nth-of-type(1) span a',
      singerTarget: 'td:nth-of-type(6) div div div:nth-of-type(2) span a',
      albumTarget: 'td:nth-of-type(7) div div div:first a',
      albumIdTarget: 'td:nth-of-type(7) div div div:first',
      albumIdPrefix: 'goAlbumDetail',
    },
    album: {
      url: 'https://www.melon.com/album/detail.htm?albumId=',
      target: '.section_info .meta .list',
      publisherTarget: 'dd:nth-of-type(3)',
      agencyTarget: 'dd:nth-of-type(4)',
    },
  },
};
