import {Questionnaire} from './questionnaire.model';

export class User {

  name: string;
  surname: string;
  email: string;
  questionnaires:[Questionnaire]
  constructor() {

  }
}
