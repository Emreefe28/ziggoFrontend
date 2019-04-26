import {User} from '../user.model';
import {Chat} from './chat.model';

export class ChatToken {
  client: User;
  employee: User;
  newMessages = false;
  chat = new Chat();
}
