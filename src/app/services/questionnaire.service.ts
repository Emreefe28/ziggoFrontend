import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Question} from '../models/question.model';
import {Employee} from '../models/employee.model';

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





  getQuestionsUrl='localhost:8080/VodafoneZiggoApi-1.2/services/rest/question/questions/'+1;     //this.getQuestionnaireId();
  postQuestionUrl='localhost:8080/VodafoneZiggoApi-1.2/services/rest/question/addquestion/';

  serviceUrl = 'https://api.myjson.com/bins/16yew0';
  // verander naar getQuestionByIdUrl
  questionUrl = 'http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee/{id}';


  getCategory(): number {
    console.log(this.category);
    return this.category;
  }

   setCategory(value: number) {
    this.category = value;
    console.log("DE CATEGORY VALUE IS NU:"+this.category);
  }

  submitQuestion(model: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Question>(this.postQuestionUrl, model, {headers});
  }

  //MOET NOG GEIMPLEMENTEERD WORDEN
  submitQuestionToQuestionnaire(model: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Question>(this.postQuestionUrl, model, {headers});
  }

  //MOET NOG GEIMPLEMENTEERD WORDEN
  submitQuestionnaireToUser(model: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Question>(this.postQuestionUrl, model, {headers});
  }


  getQuestionById(): Observable<Question> {
    return this.http.get(this.questionUrl)
      .pipe(map(data => data as Question));
  }



  getQuestions(): Observable<Question[]> {
    return this.http.get(this.getQuestionsUrl)
      .pipe(map(data => data as Question[]));
  }

}
