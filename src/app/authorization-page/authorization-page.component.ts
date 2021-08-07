import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account-service.service';
import { HttpBackEndClientService } from '../back-end-client/http-back-end-client.service';
import { UserCredentials } from '../back-end-client/request-data';
import { SessionData } from '../dto/session-data';
import { UserData } from '../dto/user-data';
import { NotificationService } from '../notifications/service/notification.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(
    public backEnd: HttpBackEndClientService, 
    private accountService: AccountService, 
    private notificationService: NotificationService,
    private router: Router
  ) { }

  display: "register" | "login" = "login"

  ngOnInit(): void {
  }

  userRegistered(userData: UserData) {
    this.showLogInDisplay()
    this.notificationService.showStandardSuccess("You successfully registered")
  }

  userLoggedIn(data: {sessionData: SessionData, credentials: UserCredentials}) {
    this.accountService.saveLogInData(data.sessionData, data.credentials)
    this.router.navigate(["/"])
  }

  showLogInDisplay() {
    this.display = "login"
  }

  showRegisterDisplay() {
    this.display = "register"
  }

}
