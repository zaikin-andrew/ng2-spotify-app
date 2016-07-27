import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent, AboutComponent, ArtistComponent } from './components';

const routes: RouterConfig = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
