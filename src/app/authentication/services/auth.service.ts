import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from 'src/app/dto/response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body: any):Observable<HttpResponse<any>>{
    return this.http
    .post<HttpResponse<any>>("https://api-universityportal.herokuapp.com/login",body,{observe: 'response'});
  }
}
