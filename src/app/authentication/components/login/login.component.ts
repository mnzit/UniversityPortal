import { Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'up-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @ViewChild('loginForm', { static: true }) 
  loginForm!: NgForm;


  constructor(private authService: AuthService){ }

  login(){
    console.log(this.loginForm);
    let request = {
        "emailAddress": this.formControl("emailAddress").value,
        "password": this.formControl("password").value
    }
    this.authService.login(request).subscribe((response) => {
      console.log(response)
    })
  }
  
  formControl(name: string): FormControl{
    return (this.loginForm.controls[name] as FormControl)
  }

}
