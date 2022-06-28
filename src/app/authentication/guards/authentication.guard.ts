import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageHelper } from 'src/app/utils/sessionStorageHelper';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router)
    { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      let authorizationHeader: string = SessionStorageHelper.getValue("token");
      if(authorizationHeader){
        console.log("Accessing Authorised Component Since their is accesstoken")
        return true;
      }else{
        console.log("Token not found")
        this.router.navigate(['/login']); 
      }
      return false;
  }
  
}
