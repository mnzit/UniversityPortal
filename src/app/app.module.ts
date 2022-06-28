import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000
    }),
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
