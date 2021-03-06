import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ViewReportsComponent } from './pages/view-reports/view-reports.component';
import { LoginComponent } from './pages/login/login.component';
import { ImportDataComponent } from './pages/data-access/import-data/import-data.component';
import { EditDataComponent } from './pages/data-access/edit-data/edit-data.component';
import { BuildReportComponent } from './pages/reports/build-report/build-report.component';
import { UsgsComponent } from './pages/reports/usgs/usgs.component';


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
      },
      {
        path: 'edit-data',
        component: EditDataComponent
      },
      {
        path: 'build-reports',
        component: BuildReportComponent
      },
      {
        path: 'usgs',
        component: UsgsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
