import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageHelper } from 'src/app/utils/sessionStorageHelper';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  constructor(private router: Router)
  { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      let authorizationHeader: string = SessionStorageHelper.getValue("token");
      if(authorizationHeader){
        this.router.navigate(['/']);   
      }
      return true;
  }
  
}
