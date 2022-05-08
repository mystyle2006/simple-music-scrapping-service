import { MusicSummaryInterface } from '../../../scheduler/interfaces/music-summary.interface';
import { albumIdStub } from './album-id.stub';
import { musicStub } from './music.stub';

export const musicSummaryStub: MusicSummaryInterface = {
  [albumIdStub]: musicStub,
};
