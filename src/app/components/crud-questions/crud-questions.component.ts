import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuestionnaireService} from "../../services/questionnaire.service";
import {Question} from "../../models/question.model";

@Component({
  selector: 'app-crud-questions',
  templateUrl: './crud-questions.component.html',
  styleUrls: ['./crud-questions.component.css']
})
export class CrudQuestionsComponent implements OnInit {

  questions = [];
  QuestionCount = 1;
  category = 0;
  geenVragenOver = false;
  pureQuestions = [];


  constructor(private router: Router, private questionnaireservice: QuestionnaireService) {

  }

  geenVragenMeer() {
    this.geenVragenOver = true;
    console.log('deze methode is aangeroepen');

  }

  nextQuestion() {
    // console.log("nextQuestionCount: "+this.QuestionCount
    // +"questionarray length: "+ this.questions[this.category].vragen.length);

    if (this.QuestionCount < this.questions[this.category].vragen.length) {

      this.pureQuestions.push(this.questions[this.category].vragen[this.QuestionCount]);
      this.QuestionCount++;
    }
    // die if statement is niet eens echt nodig maar ach
    else if (this.QuestionCount >= this.questions[this.category].vragen.length) {
      console.log('er zijn geen vragen meer. Roep gerust een supercoole functie aan om chatknop ' +
        'tevoorschijn te halen');
      this.geenVragenMeer();
    }
  }

  ngOnInit() {
    this.deleteQuestion(new Question());
    // this.category=this.questionnaireservice.getCategory();

    console.log(this.category);
    this.questionnaireservice.getQuestions().subscribe(
      data => {
        this.questions = data;
        this.pureQuestions.push(this.questions[this.category].vragen[0]);
        console.log(this.category);
      }
    );
  }

  deleteQuestion(question: Question): void {
    this.questionnaireservice.deleteQuestion(1)
      .subscribe(data => {
        this.questions = this.questions.filter(u => u !== question)
      })
  }

  editQuestion(question: Question): void {
    window.localStorage.removeItem("editQuestionId");
    window.localStorage.setItem("editQuestionId", question.id.toString());
    this.router.navigate(['edit-question']);
  };
}
