import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent, AboutComponent } from './components';

const routes: RouterConfig = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
