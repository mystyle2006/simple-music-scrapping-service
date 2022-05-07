import cheerio from 'cheerio';
import * as _ from 'lodash';

import { MusicScrapInterface } from '../../../interfaces/music-scrap.interface';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { MusicSummaryInterface } from '../interfaces/music-summary.interface';

const extractAlbumId = (prefix: string, html: string) => {
  const reg = new RegExp('(?<=' + `${prefix}\\('` + ")([0-9]+)(?=')", 'g');
  return (`${html}`.match(reg) || [])[0];
};

export const scrapMusic = async (
  music: MusicScrapInterface,
): Promise<MusicSummaryInterface> => {
  const html = await axiosWrapper.get(music.url);
  if (!html) {
    return {};
  }

  const $ = cheerio.load(html);
  let musics: MusicSummaryInterface = {};

  $(music.target).map((i, element) => {
    const ranking = _.trim($(element).find(music.rankTarget).text());
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

  return musics;
};
