import {User} from '../user.model';

export class Message {
  id: number;
  sent: number;
  user: User;
  content: string;
  isRead: boolean;

  constructor(content: string, user: User) {
    this.content = content;
    this.user = user;
    this.sent = new Date().getUTCDate();
    this.isRead = false;
  }
}
