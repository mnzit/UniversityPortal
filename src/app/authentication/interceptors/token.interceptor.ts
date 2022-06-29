import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageHelper } from 'src/app/utils/sessionStorageHelper';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authorizationHeader: string = SessionStorageHelper.getValue("token");
    if(authorizationHeader){
        request = request.clone({
            setHeaders: { Authorization: authorizationHeader }
        });
    }
    return next.handle(request);
  }
}
