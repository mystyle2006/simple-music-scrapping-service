import cheerio from 'cheerio';
import * as _ from 'lodash';

import { AlbumSummaryInterface } from '../domains/scheduler/interfaces/album-summary.interface';
import { axiosWrapper } from '../utils/axios.wrapper';
import { AlbumScrapInterface } from './album-scrap.interface';

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
    const agency = _.trim($(album.target).find(album.agencyTarget).text());
    const publisher = _.trim(
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
