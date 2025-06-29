import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';
import { authGuard } from './services/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'login', component: AuthScreenComponent },
      // {
      //   path: '',
      //   redirectTo: '/dashboard',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
          canActivate: [authGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [authGuard]
      }
    ]
  }
];
