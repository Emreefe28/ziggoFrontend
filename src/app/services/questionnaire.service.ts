import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private category: number;


  getCategory(): number {
    return this.category;
  }

  setCategory(value: number) {
    this.category = value;
  }

  serviceUrl = 'https://api.myjson.com/bins/16yew0';

  constructor(private http: HttpClient) {

  }


  getQuestions(): Observable<Question[]> {
    return this.http.get(this.serviceUrl)
      .pipe(map(data => data as Question[]));
  }

}
