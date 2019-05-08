import {Question} from './question.model';
import {Category} from './category.model';

export class Questionnaire{

  questionnaireId:number;
  created:string;
  question:[Question];
  category:Category;


}
