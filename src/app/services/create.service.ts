import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../models/employee.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private httpClient: HttpClient) {}

  onSubmit(model: Employee): Observable<Employee> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post<Employee>('http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee', model, {headers});
  }
}
