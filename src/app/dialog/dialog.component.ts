import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from '../model/employee';

// import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl([], Validators.required)
  })
  constructor(private dialogRef: MatDialogRef<DialogComponent>) { }
  employeeModel = new Employee('', '', '', '', null);


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.employeeModel)
    this.dialogRef.close();
  }

}
