import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  private bearerToken:string;
  private isAuthenticated:boolean;

  constructor(private routeService:RouterService,private authService:AuthenticationService) {
    this.bearerToken = authService.getBearerToken();
    this.isAuthenticated = true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve,reject)=>{
      this.authService.isUserAuthenticated(this.bearerToken).then(resp =>{
        if(!resp){
          reject(false);
          this.routeService.routeToLogin();
        }
        else{
          resolve(true);
        }
      })
    })
  }
}
