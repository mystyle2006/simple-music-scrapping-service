import { MusicSummaryInterface } from '../../interfaces/music-summary.interface';
import { albumIdStub } from './album-id.stub';

export const musicStub: MusicSummaryInterface = {
  [albumIdStub]: {
    album: '토스앨범',
    albumId: albumIdStub,
    singer: '토스',
    name: '토스',
    ranking: 1,
  },
};
