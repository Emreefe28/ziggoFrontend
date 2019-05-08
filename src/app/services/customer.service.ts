import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Customer} from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private serviceUrl = 'http://localhost:8080/VodafoneZiggoApi-1.2/services/rest/customers/1557216';

  constructor(private http: HttpClient) {
  }

  getCustomer(userId: number) {
    return this.http.get(this.serviceUrl)
      .pipe(map(data => data as Customer));
  }
}
