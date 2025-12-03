import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
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