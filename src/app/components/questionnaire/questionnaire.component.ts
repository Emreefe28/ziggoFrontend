import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];


  constructor(private questionnaireservice:QuestionnaireService) {

  }

  ngOnInit() {
    this.questionnaireservice.getQuestions().subscribe(
      data => {
        this.questions = data;

      }
    );

  }


}
