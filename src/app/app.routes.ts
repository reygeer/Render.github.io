import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FotoPage } from './foto/foto.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'foto', component: FotoPage },
];
