import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService, UserService, AuthenticationService } from '../_services';
import {User} from "../_models";

@Component({templateUrl: 'register.component.html',
            styleUrls: ['../my-theme.scss' + '../styles.css']})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.user = this.registerForm.value;

    this.loading = true;
    this.userService.register(this.user).subscribe(
      (data: User) => {
        this.alertService.success('register successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error("Email already exists");
        this.loading = false;
      });
  }
}
