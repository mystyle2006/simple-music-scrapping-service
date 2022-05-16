import cheerio from 'cheerio';
import * as _ from 'lodash';

import { errorMessageDictionary } from '../../../dictionary/error-message.dictionary';
import { AlbumScrapInterface } from '../../../interfaces/album-scrap.interface';
import { axiosWrapper } from '../../../utils/axios.wrapper';
import { AlbumSummaryInterface } from '../interfaces/album-summary.interface';

const scrapAlbum = async (album: AlbumScrapInterface, albumId: string) => {
  const html = await axiosWrapper.get(`${album.url}${albumId}`);
  if (!html) {
    throw new Error(errorMessageDictionary.ALBUM_SCRAPPING_EMPTY);
  }

  const $ = cheerio.load(html);
  const agency = _.trim($(album.target).find(album.agencyTarget).text());
  const publisher = _.trim($(album.target).find(album.publisherTarget).text());
  return {
    agency,
    publisher,
  };
};

export const scrapAlbums = async (
  album: AlbumScrapInterface,
  albumIds: string[],
): Promise<AlbumSummaryInterface> => {
  if (!album.url) {
    return {};
  }

  const [firstAlbumId, ...leftAlbumIds] = albumIds;
  const firstAlbumResult = await scrapAlbum(album, firstAlbumId);

  const albums = await leftAlbumIds.reduce(async (promise, albumId) => {
    const result = await promise.then();
    result[albumId] = await scrapAlbum(album, albumId);
    return Promise.resolve(result);
  }, Promise.resolve({}));

  if (!Object.keys(albums).length) {
    throw new Error(errorMessageDictionary.ALBUM_SCRAPPING_EMPTY);
  }

  return {
    [firstAlbumId]: firstAlbumResult,
    ...albums,
  };
};
