import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { Artist } from '../../shared';
import 'rxjs/add/operator/map';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  list: Array<Artist>;
  searchStr: string;
  constructor(private spotyfiAPI: SpotifyService) {
  }

  doSearch() {
    if (!this.searchStr) {
      this.list = [];
      return false;
    }
    this.spotyfiAPI.searchMusic(this.searchStr)
      .subscribe(res => {
        //noinspection TypeScriptUnresolvedVariable
        this.list = res.artists.items;
      }, err => {
        console.log('1111111', err);
      });
  }

}
