import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ){}

    ngOnInit() {

    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

}
