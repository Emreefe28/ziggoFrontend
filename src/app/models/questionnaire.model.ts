import {Question} from './question.model';
import {Category} from './category.model';

export class Questionnaire{

  private _questionnaireId:number;
  private _created:number;
  private _question:[Question];
  private _category:Category;


  get questionnaireId(): number {
    return this._questionnaireId;
  }

  set questionnaireId(value: number) {
    this._questionnaireId = value;
  }

  get created(): number {
    return this._created;
  }

  set created(value: number) {
    this._created = value;
  }

  get question(): [Question] {
    return this._question;
  }

  set question(value: [Question]) {
    this._question = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  constructor(questionnaireId: number, created: number, question: [Question], category: Category) {
    this._questionnaireId = questionnaireId;
    this._created = created;
    this._question = question;
    this._category = category;
  }
}
