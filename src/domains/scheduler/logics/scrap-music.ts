import cheerio from 'cheerio';

import { MusicScrapInterface } from '../../../interfaces/music-scrap.interface';
import { MusicSummaryInterface } from '../../../interfaces/music-summary.interface';
import { axiosWrapper } from '../../../utils/axios.wrapper';

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
    const ranking = Number($(element).find(music.rankTarget).text());
    const name = String($(element).find(music.nameTarget).text());
    const singer = String($(element).find(music.singerTarget).text());
    const album = String($(element).find(music.albumTarget).text());
    const reg = new RegExp(
      '(?<=' + `${music.albumIdPrefix}\\('` + ")([0-9]+)(?=')",
      'g',
    );
    const albumIdHtml = String($(element).find(music.albumIdTarget).html());
    const albumId = `${albumIdHtml}`.match(reg)[0];
    musics = {
      ...musics,
      [albumId]: {
        album,
        albumId,
        name,
        ranking,
        singer,
      },
    };
  });

  return musics;
};
