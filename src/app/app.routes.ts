import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'play',
    loadChildren: () =>
      import('./pages/active-stage/active-stage.module').then(
        (m) => m.ActiveStageModule
      ),
  },
];
