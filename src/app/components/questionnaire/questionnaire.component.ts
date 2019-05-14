import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {CreateService} from '../../services/create.service';
import {Question} from '../../models/question.model';
import {Questionnaire} from '../../models/questionnaire.model';
import {Employee} from '../../models/employee.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions = [];
  htmlQuestions = [];


  QuestionCount = 1;
  geenVragenOver = false;

  questionnaire =  new Questionnaire(0,1);


  constructor(private questionnaireservice: QuestionnaireService, private changeDetector: ChangeDetectorRef) {


  }


  geenVragenMeer() {
    this.geenVragenOver = true;
    console.log('deze methode is aangeroepen');
    //Verplaats de user id met get user id
    this.questionnaireservice.submitQuestionnaireToUser(2335216 ,this.questionnaire.id).subscribe(
      (error: any) => console.log(error)
    );

}


  submitQuestionnaire(questionnaire:Questionnaire) {

    var holder = [];
    this.questionnaireservice.getQuestionnaires().subscribe(
      data => {
        holder = data;


        questionnaire.id = holder[holder.length - 1].id + 1;


        this.questionnaireservice.submitQuestionnaire(questionnaire,Date.now()).subscribe(
          (data: Questionnaire) => {
            console.log(data);
          },
          (error: any) => console.log(error)
        );
      }
    );

  }


  answerFalse(question:Question) {

    console.log("Questionnaire id:"+this.questionnaire.id)

    var iets = [];
    this.questionnaireservice.getAllQuestions().subscribe(
      data => {iets = data;
        console.log("iets length is: "+iets.length);



        question.id= iets[iets.length-1].id+1;
        question.solved=false;


        this.questionnaireservice.submitQuestion(question).subscribe(
          (data: Question) => {
            console.log(data);
          },
          (error: any) => console.log(error)
        );



        this.questionnaireservice.submitQuestionToQuestionnaire( 2 , question.id).subscribe(
          (data: Question) => {
            console.log(data);
          },
          (error: any) => console.log(error)
        );


      }
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



    console.log("submitting questionnaire");
    this.submitQuestionnaire(this.questionnaire);



    console.log(this.questionnaireservice.getCategory());


    this.questionnaireservice.getQuestions().subscribe(
      data => {this.questions = data;
      console.log("De lengte van thisquestions is: "+this.questions.length);
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
