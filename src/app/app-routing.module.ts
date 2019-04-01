import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent} from './employee/employee.component';
import { ChatComponent} from './employee/chat/chat.component';


const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
    , children: [
      {path: 'chats', component: ChatComponent}]}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
