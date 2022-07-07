import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserList } from 'src/app/dto/user/userlist';
import { LoaderService } from 'src/app/shared/components/services/loader.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'up-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: UserList[] | undefined;

  constructor(private userService: UserService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
    
    this.activatedRoute.data.subscribe(({ response }) => {
      this.userList = response?.data;
    })

    this.userService.list().subscribe(
      (response) => {
        if (response.success) {
          console.log("User list fetched succesfully");
          this.userList = response.data;
        }
      },
      (error) => {
        console.log(error);
      });
  }
  ngOnInit(): void {

  }

  delete(id: number): void {
    this.userService.delete(id).subscribe(
      (response) => {
        if (response.success) {
          console.log("User deleted succesfully");
          this.toastr.success(response.message, 'User Deleted!', {
            timeOut: 2000,
          });
          this.userList = this.userList?.filter((user) => user.id != id);
        }
      },
      (error) => {
        console.log(error);
      });
  }
}
