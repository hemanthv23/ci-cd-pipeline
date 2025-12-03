import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'Home - ci/cd-githubActions'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];