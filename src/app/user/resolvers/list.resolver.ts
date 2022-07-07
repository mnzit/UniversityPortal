import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Response } from 'src/app/dto/response';
import { UserList } from 'src/app/dto/user/userlist';
import { LoaderService } from 'src/app/shared/components/services/loader.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<any> {

  constructor(
    private userService: UserService,
    private loaderService: LoaderService,
    private router: Router
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<UserList[]>> | any {
    console.log("User List resolver is triggered")
    this.loaderService.changeLoader(true);
    this.userService.list().subscribe({
      next: (response) =>{
        this.loaderService.changeLoader(false);
        return of(response);
      },
      error: (err) => {
        this.loaderService.changeLoader(false);
        this.router.navigate(['/error']);
      }
    });
    return of({});
  }
}
