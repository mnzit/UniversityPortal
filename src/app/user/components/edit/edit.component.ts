import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenderEnum } from 'src/app/constants/GenderEnum';
import { RoleList } from 'src/app/dto/user/roleListWrapper';
import { enumToObject } from 'src/app/utils/enumToObject';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'up-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  editUserForm!: FormGroup;
  genderType: any[] = enumToObject(GenderEnum);
  roles!: RoleList[] | undefined;
  showPassword: boolean = true;
  currentUserId!: number;
  
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildUserFormGroup();
    this.getRoles();

    this.activatedRoute.url.subscribe((data) => {
      this.currentUserId = +data[1].path
      this.getUserDetail();
    })
  }

  getUserDetail() {
    this.userService.detail(this.currentUserId).subscribe({
      next: (response) => {
        this.editUserForm.patchValue({ ...response?.data });
      },
      error: (error) => this.toastr.error(error?.error?.message, 'Failed loading user data')
    });
  }

  buildUserFormGroup(): void {
    this.editUserForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      middleName: ["", []],
      lastName: ["", [Validators.required]],
      genderType: ["", [Validators.required]],
      address: ["", [Validators.required]],
      contactNo: ["", [Validators.required]],
      emailAddress: ["", [Validators.required, Validators.email]],
      roleId: ["", [Validators.required]]
    });
  }

  getRoles(): void {
    this.userService.roles().subscribe({
      next: (response) => this.roles = response?.data?.roles,
      error: (error) => this.toastr.error(error?.error?.message, 'Failed loading roles')
    });
  }

  submit(): void {
    this.userService.update({id: this.currentUserId, ...this.editUserForm?.value}).subscribe({
      error: (error) => this.toastr.error(error?.error?.message, 'Failed updating user'),
      next: (response) => {
        this.toastr.success(response?.message, 'Update Successful');
        this.router.navigate(['/users']);
      }
    })
  }

  get firstName() { return this.editUserForm?.get('firstName'); }
  get middleName() { return this.editUserForm?.get('middleName'); }
  get lastName() { return this.editUserForm?.get('lastName'); }

}
