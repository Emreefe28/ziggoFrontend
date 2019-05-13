import {Component, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {CreateService} from '../../services/create.service';
import {Question} from '../../models/question.model';
import {Questionnaire} from '../../models/questionnaire.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  htmlQuestions = [Question];


  QuestionCount = 1;
  category = 0;
  geenVragenOver = false;

  questionnaire:Questionnaire;



  constructor(private questionnaireservice: QuestionnaireService) {


  }



  geenVragenMeer() {
    this.geenVragenOver = true;
    console.log('deze methode is aangeroepen');

  }

  defineQuestionnaire(){
    /*Pak de questionnaire list size +1 voor id. dit gaat mogelijk wel voor problemen zorgen als er questionnaires worden gedelete.
    * als echt nodig ga de lijst met ids door tot de vorige id verschil tussen momentele id groter is dan 1 en pak dat getal.
    * */
    this.questionnaire.questionnaireId
    //Category is gelijk aan momentele category van questionnaireservice.
    this.questionnaire.category
    this.questionnaire.created

  }

  answerFalse(question:Question) {

    var ok  = [question];

    this.questionnaireservice.getAllQuestions().subscribe(
      data => {ok = data;
      }
    );



    // question.id= ok[ok.length];

    question.id=57;
    question.solved=false;


    this.questionnaireservice.submitQuestion(question).subscribe(
      (data: Question) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );



  }

  answerTrue(question:Question) {

    //Get questions. define question id op zelfde manier als questionnaire. Commit deze naar de database.
    //Commit vervolgens de question id naar de questionnaire van userid.
    question.solved=true;

  }
  nextQuestion() {
    // console.log("nextQuestionCount: "+this.QuestionCount
    // +"questionarray length: "+ this.questions[this.category].vragen.length);

    if (this.QuestionCount < this.questions.length) {

      this.htmlQuestions.push(this.questions[this.QuestionCount]);
      this.answerFalse(this.questions[this.QuestionCount]);
      this.QuestionCount++;
    } else if (this.QuestionCount >= this.questions.length) {
      console.log('er zijn geen vragen meer. Roep gerust een supercoole functie aan om chatknop ' +
        'tevoorschijn te halen');
      this.geenVragenMeer();
    }


  }

  ngOnInit() {



    this.category=this.questionnaireservice.getCategory();
       this.questionnaireservice.setCategory(1);

    console.log(this.category);
    this.questionnaireservice.setQuestionnaireId(1);


    this.questionnaireservice.getQuestions().subscribe(
      data => {this.questions = data;
        this.htmlQuestions.push(this.questions[0]);
      }
    );




  }

  openChat() {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=600,left=0,top=0`;
    open('/client-chat', 'test', params);
  }

}
