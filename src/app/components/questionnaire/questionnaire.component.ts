import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  QuestionCount=1;
  category=0;

   pureQuestions=[];


  constructor(private questionnaireservice:QuestionnaireService) {


  }

  editQuestion() {
    this.questions[this.category].vragen[this.QuestionCount];
  }

  deleteQuestionContent() {
      this.deleteQuestionContent(this.questions.id).subscribe(
        () => console.log('Question with Id ${this.questions.id} deleted'),
        (err) => console.log(err);
      );
      this.notifyDelete.emit(this.questions.id);
  }



  nextQuestion(){
    // console.log("nextQuestionCount: "+this.QuestionCount
    // +"questionarray length: "+ this.questions[this.category].vragen.length);

    if(this.QuestionCount<this.questions[this.category].vragen.length){

      this.pureQuestions.push(this.questions[this.category].vragen[this.QuestionCount])
      this.QuestionCount++;
    }

  }

  ngOnInit() {

    // this.category=this.questionnaireservice.getCategory();

    console.log(this.category);
    this.questionnaireservice.getQuestions().subscribe(
      data => {
        this.questions = data;
        this.pureQuestions.push(this.questions[this.category].vragen[0]);
        console.log(this.category)

      }
    );

  }


}
