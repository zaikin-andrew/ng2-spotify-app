import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Control } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../shared';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent {
  list: Array<Artist>;
  searchCtrl: Control = new Control();
  constructor(private spotyfiAPI: SpotifyService) {
    this.searchCtrl.valueChanges
      .debounceTime(300)
      .filter(str => !!str)
      .flatMap(str => this.spotyfiAPI.searchMusic(str))
      .subscribe(res => {
        //noinspection TypeScriptUnresolvedVariable
        this.list = res.artists.items;
    });
  }
}
