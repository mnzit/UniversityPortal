import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'up-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit  {
  @ViewChild('loginForm', { static: true }) 
  loginForm!: ElementRef;
  @ViewChild('loginTitle', { static: true }) 
  loginTitle!: ElementRef;
  inputEmailType: string = "email";
  constructor() { 
    
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.loginForm)
    console.log(this.loginTitle)
  }

}
