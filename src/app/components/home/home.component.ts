import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {User} from '@customer//_models';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '@customer//_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private questionnaireService: QuestionnaireService,
    private authenticationService: AuthenticationService)     {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  toCategory(categoryValue: number ) {
    this.questionnaireService.setCategory(categoryValue);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

}
