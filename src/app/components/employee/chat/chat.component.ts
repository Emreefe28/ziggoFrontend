import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ChatToken} from '../../../models/chat/chat-token.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatLabel = 'Klanten';
  content: string;
  chats = Array<ChatToken>();
  currentChat = new ChatToken();
  isOnline: boolean;
  status: string;
  user = {
    username: 'mschaafsma',
    name: 'Mattijs',
    surname: 'Schaafsma',
    password: 'workwork',
    email: 'mschaafsma@vodafoneziggo.nl',
    role: 2
  };

  constructor(private chatService: ChatService) {

  }


  ngOnInit() {
    this.statusOnline();
  }

  sendMessage() {

  }

  statusOnline() {
    if (!this.isOnline) {
      this.isOnline = true;
      this.status = 'online';
      this.chatService.checkIn(this.user);
    }
  }

  statusOffline() {
    if (this.isOnline) {
      this.isOnline = false;
      this.status = 'offline';
      this.chatService.checkOut();
    }
  }
}
