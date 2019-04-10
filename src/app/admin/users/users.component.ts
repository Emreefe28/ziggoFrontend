import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  USER_DATA = [
    {username: 'adirk', name: 'Anton Dirk', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Yesterday', sessions: 2},
    {username: 'droelvink', name: 'Dries Roelvink', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Yesterday', sessions: 22},
    {username: 'aheijn', name: 'Albert Heijn', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Just now', sessions: 21},
    {username: 'dvandenbroek', name: 'Dirk van den Broek', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Just now', sessions: 12},
    {username: 'rmcdonald', name: 'Ronald Mcdonald', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Yesterday', sessions: 32},
    {username: 'bking', name: 'Burger King', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Yesterday', sessions: 5},
    {username: 'mrproper', name: 'Mister Proper', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Just now', sessions: 4},
    {username: 'gloogman', name: 'Ger Loogman', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Yesterday', sessions: 22},
    {username: 'cduizend', name: 'C1000', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Just now', sessions: 12},
    {username: 'acuyp', name: 'Albert Cuyp', email: 'antondirk@vodafoneziggo.nl', lastSeen: 'Just now', sessions: 5},
  ];

  displayedColumns: string[] = ['username', 'name', 'email', 'lastSeen', 'sessions'];
  dataSource = new MatTableDataSource(this.USER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
