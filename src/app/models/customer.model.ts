import {User} from './user.model';

export class Customer extends User {

  klantNummer: string;
  adres: string;
  birthday: string;
  phone: string;
  mobilePhone: string;

  constructor() {
    super();
    this.klantNummer = '';
    this.adres = '';
    this.birthday = '';
    this.phone = '';
    this.mobilePhone = '';
  }
}
