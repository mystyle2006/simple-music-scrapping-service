import { errorMessageDictionary } from '../../../dictionary/error-message.dictionary';
import { vendorInformationDictionary } from '../../../dictionary/vendor-information.dictionary';
import { VendorEnum } from '../../../enums/vendor.enum';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { melonMusicScrapHtmlStub } from '../_test/stubs/melon-music-scrap-html.stub';
import { melonMusicScrapInvalidHtmlStub } from '../_test/stubs/melon-music-scrap-invalid-html.stub';
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

  describe('멜론 음악 스크랩핑 데이터 axios가 정상적이지 않을 때 추출', () => {
    let output: Error;
    beforeEach(async () => {
      jest.spyOn(axiosWrapper, 'get').mockResolvedValue(null);

      try {
        await scrapMusic(vendorInformationDictionary[VendorEnum.MELON].music);
      } catch (error) {
        output = error;
      }
    });

    it('데이터 내용 정상인지 체크', () => {
      expect(output.message).toBe(
        errorMessageDictionary.MUSIC_SCRAPPING_AXIOS_INVALID,
      );
    });
  });

  describe('멜론 음악 스크랩핑 데이터 axios 정상이지만 추출할 타겟이 존재하지 않을 때 추출', () => {
    let output: Error;
    beforeEach(async () => {
      jest
        .spyOn(axiosWrapper, 'get')
        .mockResolvedValue(melonMusicScrapInvalidHtmlStub);

      try {
        await scrapMusic(vendorInformationDictionary[VendorEnum.MELON].music);
      } catch (error) {
        output = error;
      }
    });

    it('데이터 내용 정상인지 체크', () => {
      expect(output.message).toBe(
        errorMessageDictionary.MUSIC_SCRAPPING_PAGE_INVALID,
      );
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
