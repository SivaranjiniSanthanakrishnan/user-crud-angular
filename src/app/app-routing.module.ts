import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserlistComponent
  },
  {
    path: 'add',
    component: AdduserComponent
  },
  {
    path: 'update/:id',
    component: UpdateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
