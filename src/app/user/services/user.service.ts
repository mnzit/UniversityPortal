import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/dto/response';
import { RoleListWrapper } from 'src/app/dto/user/roleListWrapper';
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

  roles(): Observable<Response<RoleListWrapper>>{
    return this.http.get<Response<RoleListWrapper>>("https://api-universityportal.herokuapp.com/roles");
  }

  save(body: any):Observable<Response<any>>{
    return this.http.post<Response<any>>("https://api-universityportal.herokuapp.com/users",body);
  }

  
}
