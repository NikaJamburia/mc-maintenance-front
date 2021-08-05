import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service.service';
import { HttpBackEndClientService } from '../back-end-client/http-back-end-client.service';
import { UserCredentials } from '../back-end-client/request-data';
import { SessionData } from '../dto/session-data';
import { UserData } from '../dto/user-data';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(public backEnd: HttpBackEndClientService, private accountService: AccountService) { }

  display: "register" | "login" = "login"

  ngOnInit(): void {
  }

  userRegistered(userData: UserData) {
    console.log(userData);
  }

  userLoggedIn(data: {sessionData: SessionData, credentials: UserCredentials}) {
    console.log(data);
  }

  showLogInDisplay() {
    this.display = "login"
  }

  showRegisterDisplay() {
    this.display = "register"
  }

}
