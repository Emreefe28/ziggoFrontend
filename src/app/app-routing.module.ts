import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ChatComponent} from './employee/chat/chat.component';
import {ClientChatComponent} from './client-chat/client-chat.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './admin/users/users.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
    , children: [
      {path: 'chats', component: ChatComponent}]
  },
  {
    path: 'client-chat',
    component: ClientChatComponent
  },
  {
    path: 'admin',
    component: AdminComponent
    , children: [
      {path: 'users', component: UsersComponent}]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
