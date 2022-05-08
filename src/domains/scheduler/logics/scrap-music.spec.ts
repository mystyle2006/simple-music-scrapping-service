import { vendorInformationDictionary } from '../../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../../enums/vendor.enum';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { melonMusicScrapHtmlStub } from '../_test/stubs/melon-music-scrap-html.stub';
import { MusicSummaryInterface } from '../interfaces/music-summary.interface';
import { extractAlbumId, scrapMusic } from './scrap-music';

describe('scrap-music.spec.ts', () => {
  describe('앨범 아이디 정상적으로 추출하는지 체크', () => {
    let output: string;
    beforeEach(async () => {
      jest
        .spyOn(axiosWrapper, 'get')
        .mockResolvedValue(melonMusicScrapHtmlStub);

      output = extractAlbumId(
        vendorInformationDictionary[VendorEnum.MELON].music.albumIdPrefix,
        `goAlbumDetail('050505')`,
      );
    });

    it('앨범 ID가 정상인지 체크', () => {
      expect(output).toBe('050505');
    });
  });

  describe('멜론 음악 스크랩핑 데이터 추출', () => {
    let output: MusicSummaryInterface;
    beforeEach(async () => {
      jest
        .spyOn(axiosWrapper, 'get')
        .mockResolvedValue(melonMusicScrapHtmlStub);

      output = await scrapMusic(
        vendorInformationDictionary[VendorEnum.MELON].music,
      );
    });

    it('데이터 내용 정상인지 체크', () => {
      expect(output['1286252']).toEqual({
        album: '최고의 사랑 OST Part.4',
        albumId: '1286252',
        name: '내 손을 잡아',
        ranking: 59,
        singer: '아이유',
      });
    });
  });
});
