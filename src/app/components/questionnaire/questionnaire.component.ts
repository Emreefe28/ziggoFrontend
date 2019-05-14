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
  htmlQuestions = [Question];


  QuestionCount = 1;
  category = 0;
  geenVragenOver = false;

  questionnaire =  new Questionnaire(87,1500);


  constructor(private questionnaireservice: QuestionnaireService, private changeDetector: ChangeDetectorRef) {


  }


  geenVragenMeer() {
    this.geenVragenOver = true;
    console.log('deze methode is aangeroepen');

}


  submitQuestionnaire(questionnaire:Questionnaire) {
    /*Pak de questionnaire list size +1 voor id. dit gaat mogelijk wel voor problemen zorgen als er questionnaires worden gedelete.
    * als echt nodig ga de lijst met ids door tot de vorige id verschil tussen momentele id groter is dan 1 en pak dat getal.
    * */

    var holder = [];
    this.questionnaireservice.getQuestionnaires().subscribe(
      data => {
        holder = data;
        console.log("iets length is: " + holder.length);


        questionnaire.id = holder[holder.length - 1].id + 1;
        questionnaire.created = 1111;


        this.questionnaireservice.submitQuestionnaire(questionnaire).subscribe(
          (data: Questionnaire) => {
            console.log(data);
          },
          (error: any) => console.log(error)
        );
      }
    );

  }


  answerFalse(question:Question) {


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
    this.questionnaireservice.setCategory(2);
    this.category=this.questionnaireservice.getCategory();
    console.log(this.category);


    this.questionnaireservice.getQuestions().subscribe(
      data => {this.questions = data;
      console.log("De lengte van thisquestions is: "+this.questions.length);
        this.htmlQuestions.push(this.questions[0]);
      }

    );


    //
    // this.questionnaireservice.getQuestionCount().subscribe(
    //   data => {this.testnumber = data;
    //   console.log("testnumber is: "+this.testnumber);
    //   }
    //
    // );
    // console.log("testnumber is: "+this.testnumber);

  }

  openChat() {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=600,left=0,top=0`;
    open('/client-chat', 'test', params);
  }

}
