import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_models';
import {UserService} from "@app/_services/user.service";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private userService: UserService;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    authenticate(user: User) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);

    }

    //TODO: endpoint works, just need to make it work on frontend
    checkJwtToken(user: User){
      this.userService.getJwtToken(user);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
