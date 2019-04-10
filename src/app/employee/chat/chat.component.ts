import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Message} from '../../models/message.model';

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
  employeeStatus = 'Offline';
  author = 'first';

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    const draft = new Message();
    draft.author = 'first';
    draft.content = this.content;
    draft.room = 'room1';
    this.chatService.sendMessage(draft);
    this.content = '';
  }

  ngOnInit() {
    this.chatService.joinRoom();
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });
  }

  statusOnline() {
    this.status = true;
    this.employeeStatus = 'Online';
  }

  statusOffline() {

    this.status = false;
    this.employeeStatus = 'Offline';
  }
}
