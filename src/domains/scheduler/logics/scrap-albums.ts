import cheerio from 'cheerio';

import { AlbumScrapInterface } from '../../../interfaces/album-scrap.interface';
import { AlbumSummaryInterface } from '../../../interfaces/album-summary.interface';
import { axiosWrapper } from '../../../utils/axios.wrapper';

export const scrapAlbums = async (
  album: AlbumScrapInterface,
  albumIds: string[],
): Promise<AlbumSummaryInterface> => {
  return albumIds.reduce(async (promise, albumId) => {
    const html = await axiosWrapper.get(`${album.url}${albumId}`);
    if (!html) {
      const result = await promise.then();
      return Promise.resolve(result);
    }

    const $ = cheerio.load(html);
    const agency = String($(album.target).find(album.agencyTarget).text());
    const publisher = String(
      $(album.target).find(album.publisherTarget).text(),
    );

    const result = await promise.then();
    result[albumId] = {
      agency,
      publisher,
    };

    return Promise.resolve(result);
  }, Promise.resolve({}));
};
