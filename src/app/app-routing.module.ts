import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import { CreateEmployeeComponent} from './admin/create-employee/create-employee.component';

const routes: Routes = [
  {
    path: 'admin',
component: AdminComponent
  , children: [
  {path: 'create', component: CreateEmployeeComponent}]}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
