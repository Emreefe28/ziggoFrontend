import {Question} from './question.model';
import {Category} from './category.model';

export class Questionnaire{

  private id:number;
  private created:number;
  private questions:[Question];
  private category:Category;


  constructor(id: number, created: number) {
    this.id = id;
    this.created = created;
  }
}
