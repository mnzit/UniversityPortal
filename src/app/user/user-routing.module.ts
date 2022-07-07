import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ListResolver } from './resolvers/list.resolver';

const routes: Routes = [
  {
    path:"",
    component: ListComponent,
    resolve: {
      users: ListResolver
    }
  },
  {
    path:"create",
    component: CreateComponent
  },
  {
    path:"edit/:id",
    component: EditComponent
  },
  {
    path:"detail/:id",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
