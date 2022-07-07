import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { LoggedinGuard } from './authentication/guards/loggedin.guard';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { BodyComponent } from './shared/components/body/body.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoggedinGuard]
  },
  {
    path: "",
    component: BodyComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: "users",
        loadChildren: () => import('./user/user.module').then(module => module.UserModule)
      },
      {
        path: "error",
        component: ServerErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
