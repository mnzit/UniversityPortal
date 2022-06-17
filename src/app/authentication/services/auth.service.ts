import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/dto/response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body: any):Observable<Response<any>>{
    return this.http.post<Response<any>>("https://api-universityportal.herokuapp.com/login",body);
  }
}
