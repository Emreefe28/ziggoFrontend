import {User} from '../user.model';
import {Chat} from './chat.model';
import {Message} from './message.model';

export class ChatToken {
  client: User;
  employee: User;
  room: number;
  chat = new Chat();

  addMessage(message: Message) {
    this.chat.messages.push(message);
  }

  getLastMessage(): Message {
    const length = this.chat.messages.length;
    return this.chat.messages[length - 1];
  }


}
