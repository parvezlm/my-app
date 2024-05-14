import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "src/app/service/login.service";


@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(private loginService: LoginService, private route: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
         if (this.loginService.isUserLogin()) {
            return true;
         } else {
            this.route.navigate(['/login'])
            return false;
         }
    }
}