import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '@customer//_services';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private questionnaireService: QuestionnaireService,
    private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
      console.log(this.currentUser);
    }
  }

  toCategory(categoryValue: number) {
    this.questionnaireService.setCategory(categoryValue);
    console.log(this.questionnaireService.getCategory());
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

  logout() {
    this.authenticationService.logout();
  }

}
