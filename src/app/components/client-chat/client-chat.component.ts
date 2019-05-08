import {Component, ElementRef, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {ChatToken} from '../../models/chat/chat-token.model';
import {MessageToken} from '../../models/chat/message-token.model';
import {Message} from '../../models/chat/message.model';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
})
export class ClientChatComponent implements OnInit {
  content: string;
  isHidden = true;
  allOffline = true;
  chatToken = new ChatToken();
  user = {
    idUser: 1544216,
    email: 'info@liaaarsbergen.nl',
    password: '2E2721KN',
    name: 'Lia',
    surname: 'Aarsbergen',
    jwtToken: 223452
  };

  constructor(private chatService: ChatService, private el: ElementRef) {
  }

  ngOnInit() {
    this.chatService.whosOnline().subscribe(data => {
      if (data === 0) {
        this.allOffline = true;
      } else {
        this.allOffline = false;
      }
    });
    this.chatService.getMessages().subscribe((token: MessageToken) => {
      this.chatToken.chat.messages.push(token.message);
      this.scrollToBottom();
    });
  }


  sendMessage() {
    console.log('sending message!!!');
    const msg = new Message(this.content, this.user);
    this.chatService.sendMessage(this.chatToken.chat.id, msg);
    this.content = '';
  }

  startChat() {
    this.chatToken.client = this.user;
    this.chatService.connectToEmployee(this.chatToken);
    this.chatService.whoJoinedRoom().subscribe(chatToken => {
      this.chatToken = chatToken;
    });
    this.isHidden = false;
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.chat-messages');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}

