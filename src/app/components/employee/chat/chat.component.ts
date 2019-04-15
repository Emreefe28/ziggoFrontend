import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {Message} from '../../../models/message.model';
import {ChatToken} from '../../../models/chat-token.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatLabel = 'Klanten';
  content: string;
  messages = [];
  status = false;
  employeeStatus;
  author = 'employee';
  room: string;

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.joinRoom(this.room);
    const draft = new Message();
    draft.author = 'first';
    draft.content = this.content;
    draft.room = this.room;
    this.chatService.sendMessage(draft);
    this.content = '';
  }

  ngOnInit() {
    this.statusOnline();
    this.chatService.getRoom().subscribe(data => this.room = data);
    this.chatService.joinRoom(this.room);
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });
  }

  statusOnline() {
    this.chatService.login(new ChatToken(this.author));
    this.status = true;
    this.employeeStatus = 'Online';
  }

  statusOffline() {
    this.chatService.logout(new ChatToken(this.author));
    this.status = false;
    this.employeeStatus = 'Offline';
  }

  startChatting() {
    console.log( '1 current room: ' + this.room);
    this.chatService.getRoom().subscribe(data => this.room = data);
    console.log( '2 current room: ' + this.room);
    this.chatService.joinRoom(this.room);
  }
}
