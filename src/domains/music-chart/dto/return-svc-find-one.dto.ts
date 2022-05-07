import { AlbumInterface } from '../interfaces/album.interface';
import { MusicInterface } from '../interfaces/music.interface';

export interface ReturnSvcFindOneDto {
  album: AlbumInterface;
  music: MusicInterface;
}
