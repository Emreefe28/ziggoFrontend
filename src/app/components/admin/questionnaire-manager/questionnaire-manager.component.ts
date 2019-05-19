import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-manager',
  templateUrl: './questionnaire-manager.component.html',
  styleUrls: ['./questionnaire-manager.component.css'],

})
export class QuestionnaireManagerComponent implements OnInit {
  questionnaires;
  constructor() { }

  ngOnInit() {
  }

}
