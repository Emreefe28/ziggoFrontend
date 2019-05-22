import {Component, OnInit} from '@angular/core';
import {Questionnaire} from '../../../models/questionnaire.model';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-questionnaire-manager',
  templateUrl: './questionnaire-manager.component.html',
  styleUrls: ['./questionnaire-manager.component.css'],

})
export class QuestionnaireManagerComponent implements OnInit {
  questionnaires;
  showQuestionnaireDetails = false;
  showQuestionDetails = false;
  showList = true;
  currentQuestionnaire: Questionnaire;
  categories: Category[] = [
    {categoryId: 1, name: 'geen internet'},
    {categoryId: 2, name: 'geen wifi'},
    {categoryId: 3, name: 'traag wifi'}
  ];

  constructor() {
  }

  ngOnInit() {
    this.currentQuestionnaire = new Questionnaire(1, Date.now());
    this.currentQuestionnaire.name = 'Poging 1';
    this.currentQuestionnaire.category = new Category(1, 'geen internet');
  }

  newQuestionnaire() {
    this.showList = false;
    this.showQuestionnaireDetails = true;
  }

  cancelAdd() {
    this.showList = true;
    this.showQuestionnaireDetails = false;
  }

  saveQuestionnaire() {
    this.showList = true;
    this.showQuestionnaireDetails = false;
  }

  getImage(category) {
    switch (category) {
      case 'geen internet': {
        return '../../../../assets/images/no_internet.png';
      }
      case 'geen wifi': {
        return '../../../../assets/images/no_wifi.png';
      }
      case 'traag wifi' : {
        return '../../../../assets/images/slow_wifi.png';
      }
    }
  }

  newQuestion() {
    this.showQuestionDetails = true;
  }

  cancelQuestion() {
    this.showQuestionDetails = false;
  }

  saveQuestion() {
    this.showQuestionDetails = false;
  }
}
