import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';

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

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {

  }

  sendMessage() {
    if (this.content !== '') {
      this.sentMessage = true;
      this.messages.push({content: this.content});
      this.content = '';
    }
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
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
