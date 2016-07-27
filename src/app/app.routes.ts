import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent, AboutComponent, ArtistComponent, AlbumComponent } from './components';

const routes: RouterConfig = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
