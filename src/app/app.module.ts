import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { ViewReportsComponent } from './pages/view-reports/view-reports.component';
import { LoginComponent } from './pages/login/login.component';
import { ImportDataComponent } from './pages/data-access/import-data/import-data.component';
import { EditDataComponent } from './pages/data-access/edit-data/edit-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerComponent } from './component/date-time-picker/date-time-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendar,  faClock } from '@fortawesome/free-regular-svg-icons';

fontLibrary.add(
  faCalendar,
  faClock
);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LineChartComponent,
    ViewReportsComponent,
    LoginComponent,
    ImportDataComponent,
    EditDataComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
