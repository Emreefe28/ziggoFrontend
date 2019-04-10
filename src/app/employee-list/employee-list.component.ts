import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  isPopupOpened = false;
  constructor(private dialog?: MatDialog) { }

  ngOnInit() {
  }


  newEmployee() {
    this.isPopupOpened = true;
    const settings: MatDialogConfig = {
      minWidth: 400,
      minHeight: 300
    }
    const dialogRef = this.dialog.open(DialogComponent, settings);


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

}
