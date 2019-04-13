import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serviceUrl = 'http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.serviceUrl)
      .pipe(map(data => data as User[]));
  }

}
