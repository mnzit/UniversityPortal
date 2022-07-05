import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenderEnum } from 'src/app/constants/GenderEnum';
import { RoleList } from 'src/app/dto/user/roleListWrapper';
import { enumToObject } from 'src/app/utils/enumToObject';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'up-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createUserForm: FormGroup;
  genderType: any[] = enumToObject(GenderEnum);
  roles: RoleList[]| undefined;
  showPassword: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router
  ) {
    this.createUserForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      middleName: ["", []],
      lastName: ["", [Validators.required]],
      genderType: ["", [Validators.required]],
      address: ["", [Validators.required]],
      contactNo: ["", [Validators.required]],
      emailAddress: ["", [Validators.required, Validators.email]],
      isPasswordGenerated: ["", [Validators.required]],
      password: ["", [Validators.required]],
      sendEmail: ["", [Validators.required]],
      roleId: ["", [Validators.required]]
    });

    this.userService.roles().subscribe((response) => {
     this.roles = response.data?.roles
    },
      (error) => {
        this.toastr.error(error.error.message, 'Failed loading roles', {
          timeOut: 2000,
        });

      });
  }

  submit(){
    this.userService.save(this.createUserForm.value).subscribe((response) => {
      this.toastr.success(response.message, 'Save Successful', {
        timeOut: 2000,
      });
      this.router.navigate(['/users']);
     },
       (error) => {
         this.toastr.error(error.error.message, 'Failed saving user', {
           timeOut: 2000,
         });
 
       })
  }

  get firstName() { return this.createUserForm.get('firstName'); }
  get middleName() { return this.createUserForm.get('middleName'); }
  get lastName() { return this.createUserForm.get('lastName'); }

}

