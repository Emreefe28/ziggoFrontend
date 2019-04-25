import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {ChatToken} from '../../models/chat/chat-token.model';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
})
export class ClientChatComponent implements OnInit {
  content: string;
  isHidden = true;
  allOffline;
  chatToken = new ChatToken();
  user = {
    username: 'yefe',
    name: 'Youssef',
    surname: 'Efe',
    password: 'krowkrow',
    email: 'yefe@vodafoneziggo.nl',
    role: 3
  };

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.whosOnline().subscribe(data => {
      if (data === 0) {
        this.allOffline = true;
      } else {
        this.allOffline = false;
      }
    });
  }


  sendMessage() {
  }

  startChat() {
    this.isHidden = false;
  }

}

