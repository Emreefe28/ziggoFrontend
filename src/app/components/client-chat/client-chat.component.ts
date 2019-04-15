import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {ChatService} from '../../services/chat.service';
import {ChatToken} from '../../models/chat-token.model';

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
  room: string;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.startChat();
  }

  sendMessage() {
    if (this.content !== '') {
      const draft = new Message();
      draft.author = this.author;
      draft.content = this.content;
      draft.room = this.room;
      this.chatService.sendMessage(draft);
      this.content = '';
    }
  }

  startChat() {
    this.chatService.chatRequest(new ChatToken(this.author));
    this.chatService.getRoom().subscribe(data => {
      this.room = data;
    });
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        if (message.author !== this.author) {
          this.recipient = message.author;
        }
        this.messages.push(message);
      });
  }

  endChat() {
    window.close();
  }
}
