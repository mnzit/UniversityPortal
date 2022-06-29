import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserList } from 'src/app/dto/user/userlist';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'up-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  userList: UserList[]| undefined;

  constructor(private userService: UserService,
              private toastr: ToastrService,
    ) {
    this.userService.list().subscribe(
      (response)=> {
       if(response.success){
        console.log("User list fetched succesfully");
         this.userList = response.data;
       }
      },
      (error) =>{
          console.log(error);
      });
  }

  delete(id: number):void {
    this.userService.delete(id).subscribe(
      (response)=> {
       if(response.success){
        console.log("User deleted succesfully");
        this.toastr.success(response.message,'User Deleted!',{
          timeOut: 2000,
        });
        this.userList = this.userList?.filter((user) => user.id != id);
       }
      },
      (error) =>{
          console.log(error);
      });
  }
}
