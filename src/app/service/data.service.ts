import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  // onSubmit(): void {
  //   this.httpClient.post(this.apiUrl, this.employeeModel);
  //   console.log(this.employeeModel);
  //   this.dialogRef.close();
  // }
}
