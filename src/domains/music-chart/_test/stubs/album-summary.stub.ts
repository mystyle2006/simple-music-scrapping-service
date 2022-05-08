import { AlbumSummaryInterface } from '../../../scheduler/interfaces/album-summary.interface';
import { albumStub } from './album.stub';
import { albumIdStub } from './album-id.stub';

export const albumSummaryStub: AlbumSummaryInterface = {
  [albumIdStub]: albumStub,
};
