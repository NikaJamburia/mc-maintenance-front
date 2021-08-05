import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCredentials } from './back-end-client/request-data';
import { SessionData } from './dto/session-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private cookieService: CookieService) { }

  private readonly SESSION_COOKIE_NAME = "session"


  saveLogInData(sessionData: SessionData, userCredentials: UserCredentials) {
    let session: CookieSession = { sessionData: sessionData, loggedInUser: { userName: userCredentials.userName } }
    this.cookieService.set(this.SESSION_COOKIE_NAME, JSON.stringify(session), 7, "/")
  }

  logOut() {
    this.cookieService.delete(this.SESSION_COOKIE_NAME, "/")
  }

  getExistingSession(): CookieSession | undefined {
    return this.cookieService.check(this.SESSION_COOKIE_NAME)
      ? JSON.parse(this.cookieService.get(this.SESSION_COOKIE_NAME)) as CookieSession
      : undefined
  }

}

export interface CookieSession {
  sessionData: SessionData
  loggedInUser: { userName: string }
}
