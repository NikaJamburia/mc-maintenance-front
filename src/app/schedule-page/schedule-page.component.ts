import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from '../account-service.service';
import { HttpBackEndClientService } from '../back-end-client/http-back-end-client.service';
import { getServerErrorText } from '../back-end-client/response-data';
import { BikeSchedule, DistanceUnit } from '../dto/schedule-data';
import { NotificationService } from '../notifications/service/notification.service';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit, OnDestroy {

  constructor(
    private backEnd: HttpBackEndClientService, 
    private accountService: AccountService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  loadingData = false
  schedules?: BikeSchedule[]
  selectedSchedule?: BikeSchedule

  private getShedulesSubscription?: Subscription
  private updateScheduleSubscription?: Subscription

  ngOnInit(): void {
    this.loadingData = true

    this.getShedulesSubscription = 
    this.backEnd.getMaintenanceSchedules(this.accountService.getExistingSession()!.sessionData.id)
      .subscribe(
        data =>{
          this.schedules = data
          this.loadingData = false
        },
        err => this.handleError(err)
      )
  }

  ngOnDestroy(): void {
    this.getShedulesSubscription?.unsubscribe()
    this.updateScheduleSubscription?.unsubscribe()
  }

  handleError(error: HttpErrorResponse) {
    this.notificationService.showStandardError(getServerErrorText(error))

    if(error.status === 403) {
      this.accountService.logOut()
      this.router.navigate(['/authorization'])
    }
  }

  displayScheduleDetails(bikeSchedule: BikeSchedule) {
    this.selectedSchedule = bikeSchedule
  }

  updateSchedule(bikeSchedule: BikeSchedule) {
    let sessionId = this.accountService.getExistingSession()?.sessionData.id

    if(sessionId !== undefined) {
      console.log("aaaa");
      
      this.updateScheduleSubscription = this.backEnd.saveMaintenanceSchedules(sessionId, this.schedules!)
        .subscribe(
          resp => {
            this.notificationService.showStandardSuccess("Changes saved!")
            this.schedules = resp
            this.selectedSchedule = resp.find(r => r.bikeName === bikeSchedule.bikeName)
          },
          err => this.handleError(err)
        )
      console.log(this.schedules);
      
    } else {
      this.accountService.logOut()
      this.router.navigate(['/authorization'])
    }
    
    
  }

}
