import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  content: string;
  messages = [];
  sentMessage = false;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {

  }

  sendMessage() {
    this.sentMessage = true;
    this.messages.push({content: this.content});
    this.content = '';
  }
}
