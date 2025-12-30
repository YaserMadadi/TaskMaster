import { Routes } from '@angular/router';
import { Master } from './components/master/master';
import { Tasker } from './components/tasker/tasker';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: Master, pathMatch: 'full' },
  { path: 'task', component: Tasker, pathMatch: 'full' }
];
