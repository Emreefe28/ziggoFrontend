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

  get questionnaireId(): number {
    return this._questionnaireId;
  }

  set questionnaireId(value: number) {
    this._questionnaireId = value;
  }

  private _questionnaireId:number;
  private category: number;

  getQuestionsUrl='localhost:8080/VodafoneZiggoApi-1.2/services/rest/question/questions/'+this._questionnaireId;
  serviceUrl = 'https://api.myjson.com/bins/16yew0';
  // verander naar getQuestionByIdUrl
  questionUrl = 'http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee/{id}';


  getCategory(): number {
    return this.category;
  }

   setCategory(value: number) {
    this.category = value;
  }

  submitQuestion(model: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // de url moet natuurlijk verandert worden
    return this.http.post<Question>('http://localhost:8080/VodafoneZiggoAPI-1.0/rest/employee', model, {headers});
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
