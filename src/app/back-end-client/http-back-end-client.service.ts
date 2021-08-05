import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BikeSchedule } from '../dto/schedule-data';
import { SessionData } from '../dto/session-data';
import { UserData } from '../dto/user-data';
import { BackEndClient } from './back-end-client';
import { UserCredentials } from './request-data';
import { SingleMessageResponse } from './response-data';

@Injectable({
  providedIn: 'root'
})
export class HttpBackEndClientService implements BackEndClient {

  constructor(private httpClient: HttpClient) { }

  readonly URL = environment.backEndUrl

  login(credentials: UserCredentials): Observable<SessionData> {
    return this.httpClient.post<SessionData>(this.URL + "/login", credentials)
  }

  register(credentials: UserCredentials): Observable<UserData> {
    return this.httpClient.post<UserData>(this.URL + "/register", credentials)
  }

  getMaintenanceSchedules(sessionId: string): Observable<BikeSchedule[]> {
    return this.httpClient.get<BikeSchedule[]>(this.URL + "/maintenance-schedule", { headers: { "session-id": sessionId } })
  }

  saveMaintenanceSchedules(sessionId: string, schedule: BikeSchedule[]): Observable<SingleMessageResponse> {
    throw this.httpClient.post<SingleMessageResponse>(this.URL + "/maintenance-schedule", schedule, { headers: { "session-id": sessionId } })
  }
}
