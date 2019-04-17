import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(questionnaireService : QuestionnaireService) {

  }
  toCategory(categoryValue:number){
    questionnaireService.setCategory(categoryValue);
  }

  ngOnInit() {

  }



}
