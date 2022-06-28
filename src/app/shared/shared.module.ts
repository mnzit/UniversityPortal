import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    BodyComponent,
          HeaderComponent,
          FooterComponent,
          NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class SharedModule { }
