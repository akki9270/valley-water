import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { ViewReportsComponent } from './pages/view-reports/view-reports.component';
import { LoginComponent } from './pages/login/login.component';
import { ImportDataComponent } from './pages/data-access/import-data/import-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LineChartComponent,
    ViewReportsComponent,
    LoginComponent,
    ImportDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
