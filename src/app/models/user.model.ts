import {Questionnaire} from './questionnaire.model';

export class User {
  idUser: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  jwtToken: number;
  questionnaires: [Questionnaire];

  constructor() {
    this.name = '';
    this.surname = '';
  }
}
