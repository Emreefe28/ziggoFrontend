import {Component, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {CreateService} from '../../services/create.service';
import {Question} from '../../models/question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  QuestionCount = 1;
  category = 0;
  geenVragenOver = false;
  pureQuestions = [Question];


  constructor(private questionnaireservice: QuestionnaireService) {


  }



  geenVragenMeer() {
    this.geenVragenOver = true;
    console.log('deze methode is aangeroepen');

  }


  answerFalse(question:Question) {


  }
  nextQuestion() {
    // console.log("nextQuestionCount: "+this.QuestionCount
    // +"questionarray length: "+ this.questions[this.category].vragen.length);

    if (this.QuestionCount < this.questions.length) {

      this.pureQuestions.push(this.questions[this.QuestionCount]);
      this.QuestionCount++;
    } else if (this.QuestionCount >= this.questions.length) {
      console.log('er zijn geen vragen meer. Roep gerust een supercoole functie aan om chatknop ' +
        'tevoorschijn te halen');
      this.geenVragenMeer();
    }


  }

  ngOnInit() {


    questoservice:QuestionnaireService;

    this.category=this.questionnaireservice.getCategory();
       this.questionnaireservice.setCategory(1);

    console.log(this.category);
    this.questionnaireservice.setQuestionnaireId(1);


    this.questionnaireservice.getQuestions().subscribe(
      data => {this.questions = data;

      }
    );



  }

  openChat() {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=600,left=0,top=0`;
    open('/client-chat', 'test', params);
  }

}
