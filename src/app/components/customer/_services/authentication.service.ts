﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { User } from '../_models';
import {UserService} from './user.service';
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private userService: UserService;
    public loggedIn: boolean;


    constructor(private http: HttpClient, private router: Router,) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    checkIfLoggedIn(){
      if(this.currentUserSubject.value){
        this.loggedIn = true;
      }
    }

    authenticate(user: User) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(this.userService.getDepartment(user));
          const employee = this.userService.getDepartment(user);
    //   if (employee == 'kcc'){
    //         this.router.navigate(['/employee']);
    //       }
    //       if (this.user.department == 'admin'){
    //         this.router.navigate(['/admin']);
    //       }
        console.log(user);
          this.loggedIn = true;

    }

    // TODO: endpoint works, just need to make it work on frontend
    checkJwtToken(user: User){
      this.userService.getJwtToken(user);
    }

    logout() {
        // remove user from local storage to log user out
        this.router.navigate(['/login']);
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn = false;
    }
}
