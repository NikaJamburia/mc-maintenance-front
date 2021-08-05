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

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInFormComponent,
    AuthorizationPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
