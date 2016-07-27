import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services';
import { Album } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent {
  private album: Album;
  constructor(
    private SpotifyAPI: SpotifyService,
    private route: ActivatedRoute) {
    route.params
      .map(p => p['id'])
      .flatMap(id => SpotifyAPI.getAlbum(id))
      .subscribe(result => {
        this.album = result;
      });
  }

}
