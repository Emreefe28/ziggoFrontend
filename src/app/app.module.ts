import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EmployeeComponent} from './components/employee/employee.component';
import {MaterialModule} from './material.module';
import {ChatComponent} from './components/employee/chat/chat.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChatService} from './services/chat.service';
import {UsersComponent} from './components/admin/users/users.component';
import {EmployeeService} from './services/employee.service';
import {HomeComponent} from './components/home/home.component';
import {QuestionnaireComponent} from './components/questionnaire/questionnaire.component';
import {QuestionnaireService} from './services/questionnaire.service';
import {ClientChatComponent} from './components/client-chat/client-chat.component';
import {AdminComponent} from './components/admin/admin.component';
import {CreateEmployeeComponent} from './components/admin/create-employee/create-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ChatComponent,
    ClientChatComponent,
    AdminComponent,
    UsersComponent,
    HomeComponent,
    QuestionnaireComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ChatService, EmployeeService, QuestionnaireService],
  entryComponents: [CreateEmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
