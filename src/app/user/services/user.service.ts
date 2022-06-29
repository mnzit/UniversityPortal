import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/dto/response';
import { UserList } from 'src/app/dto/user/userlist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list():Observable<Response<UserList[]>>{
    return this.http.get<Response<UserList[]>>("https://api-universityportal.herokuapp.com/users");
  }

  delete(id: number): Observable<Response<any>>{
    return this.http.delete<Response<any>>("https://api-universityportal.herokuapp.com/users/"+id.toString());
  }
}
