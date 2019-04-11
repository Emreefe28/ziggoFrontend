import {Component, OnInit} from '@angular/core';
import {Message} from '../models/message.model';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
})
export class ClientChatComponent implements OnInit {
  content: string;
  messages = [];
  author = 'client';
  recipient: string;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.createRoom(this.author);

    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        if (message.author !== this.author) {
          this.recipient = message.author;
        }
        this.messages.push(message);
      });
  }

  sendMessage() {
    if (this.content !== '') {
      const draft = new Message();
      draft.author = this.author;
      draft.content = this.content;
      draft.room = 'room1';
      this.chatService.sendMessage(draft);
      this.content = '';
    }
  }

  endChat() {
    window.close();
  }
}
