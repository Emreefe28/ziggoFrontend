import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {User} from '../../models/user.model';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;
  displayedColumns: string[] = ['username', 'name', 'surname', 'password', 'email', 'role'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    console.log(this.users);
    this.employeeService.getEmployees().subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log( )
      console.log(data);
    });
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
