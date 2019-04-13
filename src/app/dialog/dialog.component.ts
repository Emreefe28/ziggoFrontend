import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from '../model/employee';
import { DataService } from '../service/data.service';

// import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public employeeForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl([], Validators.required)
  });
  constructor(private dialogRef: MatDialogRef<DialogComponent>, private dataService: DataService) { }
  employeeModel = new Employee('', '', '', '', '', null);
  onSubmit(): void {
  this.dataService.onSubmit(this.employeeModel);
  this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }



}
