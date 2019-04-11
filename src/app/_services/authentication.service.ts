import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_models';
import {UserComponent} from "@app/_components/user.component";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public userComponent: UserComponent;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    checkLoginData(username: string){
      this.userComponent.getUser(username);
      this.userComponent.showUser();
    }

    login(username: string, password: string) {
        this.checkLoginData(username);

        // return this.http.post<any>(`${environment.apiUrl}/${username}`, { username, password })
        //     .pipe(map(user => {
        //         if (user) {
        //             // store user details in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //             this.currentUserSubject.next(user);
        //         }
        //
        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
