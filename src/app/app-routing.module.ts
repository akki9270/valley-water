import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ViewReportsComponent } from './pages/view-reports/view-reports.component';
import { LoginComponent } from './pages/login/login.component';
import { ImportDataComponent } from './pages/data-access/import-data/import-data.component';


const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'view-reports',
        component: ViewReportsComponent
      },
      {
        path: 'import-data',
        component: ImportDataComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
