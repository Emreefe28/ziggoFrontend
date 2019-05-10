import {User} from './user.model';

export class Employee extends User {
  department: string;

  constructor() {
    super();
    this.department = '';
  }
}
