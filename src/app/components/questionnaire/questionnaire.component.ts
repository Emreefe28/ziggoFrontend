import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  nextQuestionCount=0;
  category=0;

  addedQuestions=[];


  constructor(private questionnaireservice:QuestionnaireService) {

  }



  nextQuestion(){
    // console.log("nextQuestionCount: "+this.nextQuestionCount +"questionarray length: "+ this.addedQuestions.length+
    //   "vraagtitel: "+this.addedQuestions[0].vragen[0].titel);
    if(this.nextQuestionCount<this.questions.length+1){
      this.nextQuestionCount++;



      this.addedQuestions.push(this.questions[this.nextQuestionCount])


      // console.log("momentele vraag: "+this.nextQuestionCount +" questionarray length: "+ this.addedQuestions.length+
      //  "categorienaam: "+ this.addedQuestions[this.category].catNaam+
      //   "vraagtitel: "+this.addedQuestions[this.category].vragen[this.nextQuestionCount].titel);
      //

      // this.nextQuestionCount=this.questions[this.nextQuestionCount].qId;

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
