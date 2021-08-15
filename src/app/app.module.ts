import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app-component/app.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationsComponent } from './notifications/component/notifications.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { MenuComponent } from './schedule-page/menu/menu.component';
import { BikeSelectComponent } from './schedule-page/bike-select/bike-select.component';
import { DistanceStringPipe } from './pipes/distance-string.pipe';
import { CreateScheduleFormComponent } from './schedule-page/create-schedule-form/create-schedule-form.component';
import { ScheduleDetailsPageComponent } from './schedule-page/schedule-details-page/schedule-details-page.component';
import { UpdeatableTextComponent } from './updeatable-text/updeatable-text.component';
import { JsonDatePipe } from './pipes/json-date.pipe';
import { JsonDateTimePipe } from './pipes/json-date-time.pipe';
import { AddScheduleItemFormComponent } from './schedule-page/add-schedule-item-form/add-schedule-item-form.component';
import { AddScheduleItemEntryFormComponent } from './schedule-page/add-schedule-item-entry-form/add-schedule-item-entry-form.component';
import { BikeImageSelectModalComponent } from './schedule-page/bike-image-select-modal/bike-image-select-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInFormComponent,
    AuthorizationPageComponent,
    NotificationsComponent,
    SchedulePageComponent,
    MenuComponent,
    BikeSelectComponent,
    DistanceStringPipe,
    CreateScheduleFormComponent,
    ScheduleDetailsPageComponent,
    UpdeatableTextComponent,
    JsonDatePipe,
    JsonDateTimePipe,
    AddScheduleItemFormComponent,
    AddScheduleItemEntryFormComponent,
    BikeImageSelectModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
