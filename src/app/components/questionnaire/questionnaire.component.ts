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
  geenVragenOver=false;
   pureQuestions=[];


  constructor(private questionnaireservice:QuestionnaireService) {

  }


  geenVragenMeer(){
    this.geenVragenOver=true;
    console.log("deze methode is aangeroepen")

  }
  nextQuestion(){
    // console.log("nextQuestionCount: "+this.QuestionCount
    // +"questionarray length: "+ this.questions[this.category].vragen.length);

    if(this.QuestionCount<this.questions[this.category].vragen.length){

      this.pureQuestions.push(this.questions[this.category].vragen[this.QuestionCount])
      this.QuestionCount++;
    }
    //die if statement is niet eens echt nodig maar ach
    else if(this.QuestionCount>=this.questions[this.category].vragen.length) {
      console.log("er zijn geen vragen meer. Roep gerust een supercoole functie aan om chatknop " +
        "tevoorschijn te halen");
      this.geenVragenMeer();
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
