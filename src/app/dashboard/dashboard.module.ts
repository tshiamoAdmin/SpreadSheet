import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { BankListComponent } from './dashboard-components/bank-list/bank-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardContent } from '@angular/material/card';
import { Table1RawComponent } from './dashboard-components/table1-raw/table1-raw.component';




export function tokenGetter() {
  return localStorage.getItem('token'); // Retrieve the token
}

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(DashboardRoutes),
    DashboardComponent,
    MatCardModule,
    MatTabsModule,
  ],
  declarations: [
    
    
    Table1RawComponent
  ],
})
export class DashboardModule { }
