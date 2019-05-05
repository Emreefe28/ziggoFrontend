import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {catchError, map} from "rxjs/operators";
import {Question} from "../models/question.model";
import {QuestionContent} from "../models/questioncontent.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private category:number;


  getCategory(): number {
    return this.category;
  }

   setCategory(value: number) {
    this.category = value;
  }

  serviceUrl="https://api.myjson.com/bins/we52o";
  constructor(private http:HttpClient) {

  }

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.serviceUrl)
      .pipe(map(data => data as Question[]));
  }

  editQuestionContent(question: QuestionContent): Observable<any> {
    return this.http.put(this.serviceUrl, question, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteQuestionContent(question: QuestionContent): observable<void> {
    return this.httpClient.delete<void>(this.serviceUrl)

  }

}
