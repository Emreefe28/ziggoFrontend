import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import {UserInterface} from "@app/_interfaces";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getByName(username: string) {
        return this.http.get(`${environment.apiUrl}/users/${username}`);
    }

    getName(){
      return this.http.get<UserInterface>(`${environment.apiUrl}`);
    }

    register(user: User) {
        return this.http.post(
          `${environment.apiUrl}/adduser?username=${user.username}&password=${user.password}`,
          user, { observe: 'response' });
    }

    login(user: User) {
      return this.http.post(
        `${environment.apiUrl}/login?username=${user.username}&password=${user.password}`,
        user, {observe: 'response'});
    }
    // update(user: User) {
    //     return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    // }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
