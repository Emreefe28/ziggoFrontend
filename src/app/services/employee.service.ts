import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get('http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee');
  }
}
