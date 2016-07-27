import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private spotifyUrl: string = `https://api.spotify.com/v1/`;
  constructor(private http: Http) {

  }
  apiRequest(url: string) {
    return this.http.get(url)
      .map(res => res.json());
  }
  searchMusic(str, type = 'artist') {
    return this.apiRequest(`${this.spotifyUrl}search?query=${str}&offset=0&limit=20&type=${type}&market=US`);
  }
  getArtist(id: string) {
    return this.apiRequest(`${this.spotifyUrl}artists/${id}`);
  }
  getAlbums(artistId: string) {
    return this.apiRequest(`${this.spotifyUrl}artists/${artistId}/albums`);
  }
  getAlbum(id: string) {
    return this.apiRequest(`${this.spotifyUrl}albums/${id}`);
  }
}
