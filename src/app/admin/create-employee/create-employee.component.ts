import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  role: int;
  constructor() {}

  ngOnInit() {
  }

  sendData(): void {
    // data: {name: this.name, username=this.username, password=this.password, role=this.role};
  }

}
