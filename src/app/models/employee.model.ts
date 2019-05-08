import {User} from './user.model';

export class Employee extends User {
  afdeling: string;

  constructor() {
    super();
    this.afdeling = '';
  }
}
