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
  sentMessage = false;
  status = false;
  employeeStatus = 'Offline';
  author = 'first';

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    const draft = new Message();
    draft.author = this.content;
    draft.content = this.content;
    this.chatService.sendMessage(draft);
    this.content = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        this.checkAuthor(message.author);
        this.messages.push(message);
      });
  }

  checkAuthor(name: string) {
    if (name === this.author) {
      this.sentMessage = true;
    }
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
