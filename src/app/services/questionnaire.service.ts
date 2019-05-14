import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Question} from '../models/question.model';
import {Employee} from '../models/employee.model';
import {Questionnaire} from '../models/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  constructor(private http: HttpClient) {

  }




  private category: number;
  private questionnaireId:number;
  private question:Question;

  getQuestion():Question {
    console.log("questionnaire id is:"+this.question);
    return this.question;
  }

  setQuestion(value:Question) {
    console.log("questionnaire id is:"+this.question);
    return this.question;
  }



  setQuestionnaireId(value: number) {
    this.questionnaireId = value;
    console.log("DE QUESTIONNAIRE ID IS NU"+this.questionnaireId);

  }


  getQuestionnaireId():number {
    console.log("questionnaire id is:"+this.questionnaireId);
    return this.questionnaireId;
  }




  baseUrl = 'http://localhost:8080/VodafoneZiggoApi-1.2/services/rest/question';

  questionCountUrl =this.baseUrl+'/true';


  getQuestionsUrl= this.baseUrl+'/questionnaire/questions/1';

  getQuestionnairesUrl= this.baseUrl+'/questionnaire';
  //this.getQuestionnaireId();

  allQuestionsUrl=this.baseUrl;

  postQuestionUrl=this.baseUrl+'/addquestion';

  postQuestionnaireUrl=this.baseUrl+'/addquestionnaire/2';  //+this.category;



  getCategory(): number {
    console.log("De category is momenteel: "+this.category);
    return this.category;
  }

   setCategory(value: number) {
    this.category = value;
    console.log("DE CATEGORY VALUE IS NU:"+this.category);
  }

  submitQuestion(model: Question): Observable<Question> {
    console.log("Question id:" +model.id+ " Solved: "+model.solved +" vraag: " + model.question +" Title:" +model.title)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Question>(this.postQuestionUrl, model, {headers});
  }

  submitQuestionnaire(model: Questionnaire): Observable<Questionnaire> {
    console.log("Questionnaire id is: "+ model.id+" created value is: "+ model.created);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Questionnaire>(this.postQuestionnaireUrl, model, {headers});
  }



  //MOET NOG GEIMPLEMENTEERD WORDEN
  submitQuestionnaireToUser(model: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Question>(this.postQuestionUrl, model, {headers});
  }






  submitQuestionToQuestionnaire(url:string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(url,  {headers});
  }


  getQuestions(): Observable<Question[]> {
    return this.http.get(this.getQuestionsUrl)
      .pipe(map(data => data as Question[]));
  }

  getQuestionnaires(): Observable<Questionnaire[]> {
    return this.http.get(this.getQuestionnairesUrl)
      .pipe(map(data => data as Questionnaire[]));
  }
  getQuestionCount(): Observable<number> {
    return this.http.get(this.questionCountUrl)
      .pipe(map(data => data as number));
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get(this.allQuestionsUrl)
      .pipe(map(data => data as Question[]));
  }

}
