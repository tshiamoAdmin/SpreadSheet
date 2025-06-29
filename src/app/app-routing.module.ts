import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';
import { LlmComponent } from './llm/llm.component';


const routes: Routes = [
  { path: 'login', component: AuthScreenComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard], // Protect this route
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'ask-llm', component: LlmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
