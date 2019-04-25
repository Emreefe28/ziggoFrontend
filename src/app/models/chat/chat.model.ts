import {Message} from './message.model';

export class Chat {
  id: string;
  created: number;
  messages: Message[];

  constructor() {
    this.created = new Date().getDate();
    this.messages = [];
  }
}
