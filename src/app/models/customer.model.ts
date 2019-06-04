import {User} from './user.model';

export class Customer extends User {

  customerCode: string;
  address: string;
  birthdate: string;
  phone: string;
  mobilePhone: string;

  constructor() {
    super();
    this.customerCode = 'N/A';
    this.address = 'N/A';
    this.birthdate = 'N/A';
    this.phone = 'N/A';
    this.mobilePhone = 'N/A';
  }
}
