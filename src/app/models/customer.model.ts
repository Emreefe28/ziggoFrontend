import {User} from './user.model';

export class Customer extends User {

  customerCode: string;
  address: string;
  birthdate: string;
  phone: string;
  mobilePhone: string;

  constructor() {
    super();
    this.customerCode = '';
    this.address = '';
    this.birthdate = '';
    this.phone = '';
    this.mobilePhone = '';
  }
}
