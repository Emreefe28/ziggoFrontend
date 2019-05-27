import {User} from './user.model';

export class Customer extends User {

  customerCode: string;
  address: string;
  phone: string;

  constructor() {
    super();
    this.customerCode = '';
    this.address = '';
    this.phone = '';
  }
}
