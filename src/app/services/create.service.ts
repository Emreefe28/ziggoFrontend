import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  apiUrl: 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  onSubmit(model: Employee): void {
    this.httpClient.post(this.apiUrl, model);
    console.log(model);
  }
}
