import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { MaterialModule } from './material.module';
import { ChatComponent } from './employee/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ChatService} from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
