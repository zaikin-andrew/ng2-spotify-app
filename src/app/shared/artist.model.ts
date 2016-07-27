import {Album} from './album.model';
export class Artist {
  id: string;
  name: string;
  genres: any;
  albums: Array<Album>;
};
