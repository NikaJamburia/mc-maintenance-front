import { Observable } from "rxjs";
import { BikeSchedule } from "../dto/schedule-data";
import { SessionData } from "../dto/session-data";
import { UserData } from "../dto/user-data";
import { UserCredentials } from "./request-data";
import { SingleMessageResponse } from "./response-data";

export interface BackEndClient {
    login(credentials: UserCredentials): Observable<SessionData>
    register(credentials: UserCredentials): Observable<UserData>
    getMaintenanceSchedules(sessionId: string): Observable<BikeSchedule[]>
    saveMaintenanceSchedules(sessionId: string, schedule: BikeSchedule[]): Observable<SingleMessageResponse>
}