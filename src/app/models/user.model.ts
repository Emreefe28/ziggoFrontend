export class User {
  username: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  role: number;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
