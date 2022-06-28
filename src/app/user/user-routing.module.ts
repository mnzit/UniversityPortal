import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path:"",
    component: ListComponent
  },
  {
    path:"create",
    component: CreateComponent
  },
  {
    path:"edit",
    component: EditComponent
  },
  {
    path:":id",
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
