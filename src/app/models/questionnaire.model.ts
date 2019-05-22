import {Question} from './question.model';
import {Category} from './category.model';

export class Questionnaire {

  id: number;
  name: string;
  _created: number;
  questions: [Question];
  category: Category;


  constructor(id: number, created: number) {
    this.id = id;
    this._created = created;
  }
}
