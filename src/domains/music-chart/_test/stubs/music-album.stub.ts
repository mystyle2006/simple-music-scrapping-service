import { ReturnSvcFindOneDto } from '../../dto/return-svc-find-one.dto';
import { albumIdStub } from './album-id.stub';
import { albumSummaryStub } from './album-summary.stub';
import { musicSummaryStub } from './music-summary.stub';

export const musicAlbumStub: ReturnSvcFindOneDto = {
  music: musicSummaryStub[albumIdStub],
  album: albumSummaryStub[albumIdStub],
};
