import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageHelper } from 'src/app/utils/sessionStorageHelper';

@Component({
  selector: 'up-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }


  logout():void{
    SessionStorageHelper.removeValue("token");
    this.router.navigate(['/login'])
  }

}
