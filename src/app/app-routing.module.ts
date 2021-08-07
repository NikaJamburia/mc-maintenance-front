import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { IsLoggedIn } from './gaurds/is-logged-in';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

const routes: Routes = [
  { path: "", component: SchedulePageComponent, canActivate: [IsLoggedIn] },
  { path: "authorization", component: AuthorizationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
