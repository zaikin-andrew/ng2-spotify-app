import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from './components';
import {HTTP_PROVIDERS} from '@angular/http';
import {SpotifyService} from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SpotifyService]
})
export class AppComponent {
}
