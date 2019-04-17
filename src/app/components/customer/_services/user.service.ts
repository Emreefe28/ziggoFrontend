import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '../_models';
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

    register(user: User) {
        return this.http.post(
          `${environment.apiUrl}/adduser?userName=${user.userName}&password=${user.password}`,
          user);
    }

    getJwtToken(user: User) {
      return this.http.get(`${environment.apiUrl}/jwt/${user.jwtToken}`);
    }


    login(user: User) {
      return this.http.post(
        `${environment.apiUrl}/login?userName=${user.userName}&password=${user.password}`,
        user);
    }

    // update(user: User) {
    //     return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    // }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
