import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../account-service.service";

@Injectable({
    providedIn: 'root'
})
export class IsLoggedIn implements CanActivate {

    constructor(private accountService: AccountService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.accountService.getExistingSession() !== undefined
            
        if (this.accountService.getExistingSession()) {
            return true
        }
        this.router.navigate(['/authorization'])
        return false
    }

}