import { albumStub } from '../../../scheduler/_test/stubs/album.stub';
import { albumIdStub } from '../../../scheduler/_test/stubs/album-id.stub';
import { musicStub } from '../../../scheduler/_test/stubs/music.stub';
import { ReturnSvcFindOneDto } from '../../dto/return-svc-find-one.dto';

export const musicAlbumStub: ReturnSvcFindOneDto = {
  music: musicStub[albumIdStub],
  album: albumStub[albumIdStub],
};
