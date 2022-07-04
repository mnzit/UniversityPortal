import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'up-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createUserForm = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    middleName: new FormControl(""),
    lastName: new FormControl("",[Validators.required]),
    genderType: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    contactNo: new FormControl("",[Validators.required]),
    emailAddress: new FormControl("",[Validators.required,Validators.email]),
    isPasswordGenerated: new FormControl("",[Validators.required]),
    password: new FormControl(""),
    sendEmail: new FormControl("",[Validators.required]),
    roleId: new FormControl("",[Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get firstName() { return this.createUserForm.get('firstName'); }
  get middleName() { return this.createUserForm.get('middleName'); }
  get lastName() { return this.createUserForm.get('lastName'); }

}
