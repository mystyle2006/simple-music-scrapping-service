import cheerio from 'cheerio';
import * as _ from 'lodash';

import { errorMessageDictionary } from '../../../dictionary/error-message.dictionary';
import { MusicScrapInterface } from '../../../interfaces/music-scrap.interface';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { MusicSummaryInterface } from '../interfaces/music-summary.interface';

export const extractAlbumId = (prefix: string, html: string): string => {
  const reg = new RegExp(
    '(?<=' + `[${prefix}\\('|${prefix}/]` + ')([0-9]+)(?=[\'|"])',
    'g',
  );
  return (`${html}`.match(reg) || [])[0];
};

export const scrapMusic = async (
  music: MusicScrapInterface,
): Promise<MusicSummaryInterface> => {
  if (!music.url) {
    return {};
  }

  const html = await axiosWrapper.get(music.url);
  if (!html) {
    throw new Error(errorMessageDictionary.MUSIC_SCRAPPING_AXIOS_INVALID);
  }

  const $ = cheerio.load(html);
  let musics: MusicSummaryInterface = {};

  if (!$(music.target).length) {
    throw new Error(errorMessageDictionary.MUSIC_SCRAPPING_PAGE_INVALID);
  }

  $(music.target).map((i, element) => {
    const ranking = _.trim(
      $(element).find(music.rankTarget).children().remove().end().text(),
    );
    const name = _.trim($(element).find(music.nameTarget).text());
    const singer = _.trim($(element).find(music.singerTarget).text());
    const album = _.trim($(element).find(music.albumTarget).text());
    const albumIdHtml = _.trim($(element).find(music.albumIdTarget).html());

    const albumId = extractAlbumId(music.albumIdPrefix, albumIdHtml);
    musics = {
      ...musics,
      [albumId]: {
        album,
        albumId,
        name,
        ranking: Number(ranking),
        singer,
      },
    };
  });

  if (!Object.keys(musics).length) {
    throw new Error(errorMessageDictionary.MUSIC_SCRAPPING_EMPTY);
  }

  return musics;
};
