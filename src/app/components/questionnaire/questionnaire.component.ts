import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  counter=1;
  category=0;

  addedQuestions=[];






  constructor(private questionnaireservice:QuestionnaireService) {

  }



  nextQuestion(){
    console.log("counter: "+this.counter +"questionarray length: "+ this.addedQuestions.length+  "questionid: "+this.addedQuestions[this.counter-1].questionId);
    if(this.counter<this.questions.length){


      this.addedQuestions.push(this.questions[this.counter])
      this.counter++;

      // this.counter=this.questions[this.counter];

    }

  }
  ngOnInit() {
    this.questionnaireservice.getQuestions().subscribe(
      data => {
        this.questions = data;
        this.addedQuestions[0] = this.questions[0];

      }
    );

  }


}
