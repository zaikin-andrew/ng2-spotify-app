import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {SpotifyService} from '../../services';
import {Artist, Album} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ArtistComponent {
  artist: Array<Artist>;
  albums: Array<Album>;

  constructor(
    private SpotifyAPI: SpotifyService,
    private route: ActivatedRoute
  ) {
    route.params
      .map(p => p['id'])
      .flatMap(id => SpotifyAPI.getArtist(id))
      .subscribe(result => {
        this.artist = result;
    });
    route.params
      .map(p => p['id'])
      .flatMap(id => SpotifyAPI.getAlbums(id))
      .subscribe(albums => {
        this.albums = albums.items;
      });
  }

}
