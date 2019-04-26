import {Message} from './message.model';

export class Chat {
  id: number;
  created: number;
  messages: Message[];

  constructor() {
    this.id = new Date().getTime();
    this.created = new Date().getDate();
    this.messages = [];
  }
}
