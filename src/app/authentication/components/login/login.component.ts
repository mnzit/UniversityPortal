import { Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { Response } from 'src/app/dto/response';
import { SessionStorageHelper } from 'src/app/utils/sessionStorageHelper';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'up-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @ViewChild('loginForm', { static: true }) 
  loginForm!: NgForm;
  
  isLoading: boolean = false;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router)
              { }

  login(){
    this.isLoading = true;
    let request = {
        "emailAddress": this.formControl("emailAddress").value,
        "password": this.formControl("password").value
    }

    this.authService.login(request).subscribe((httpResponse) => {
        let authorizationHeader: string | null = httpResponse.headers.get('Authorization');
        if(authorizationHeader){
          this.isLoading = false;
          console.log("Login Success -> Setting token to session storage")
          SessionStorageHelper.setValue("token", authorizationHeader);
          this.router.navigate(['/']);
        }
    }, 
    (error) => {
      console.log("Login Failed")
      this.toastr.error(error.error.message,'Login Failed!',{
        timeOut: 2000,
      });
  
    });
  }
  
  formControl(name: string): FormControl{
    return (this.loginForm.controls[name] as FormControl)
  }

}
