import {Message} from './message.model';

export class MessageToken {
  room: number;
  message: Message;

  constructor(room: number, message: Message) {
    this.room = room;
    this.message = message;

  }
}
