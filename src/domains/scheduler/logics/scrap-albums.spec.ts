import { vendorInformationDictionary } from '../../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../../enum/vendor.enum';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { melonAlbumScrapHtmlStub } from '../_test/stubs/melon-album-scrap-html.stub';
import { AlbumSummaryInterface } from '../interfaces/album-summary.interface';
import { scrapAlbums } from './scrap-albums';

describe('scrap-albums.spec.ts', () => {
  describe('멜론 앨범 스크랩핑 데이터 추출', () => {
    let output: AlbumSummaryInterface;
    beforeEach(async () => {
      jest
        .spyOn(axiosWrapper, 'get')
        .mockResolvedValue(melonAlbumScrapHtmlStub);

      output = await scrapAlbums(
        vendorInformationDictionary[VendorEnum.MELON].album,
        ['10908834'],
      );
    });

    it('데이터 내용 정상인지 체크', () => {
      expect(output['10908834']).toEqual({
        agency: 'YG Entertainment',
        publisher: 'YG PLUS',
      });
    });
  });
});
