import {Component, ElementRef, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ChatToken} from '../../../models/chat/chat-token.model';
import {Message} from '../../../models/chat/message.model';
import {MessageToken} from '../../../models/chat/message-token.model';
import {CustomerService} from '../../../services/customer.service';
import {Customer} from '../../../models/customer.model';

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
  isHidden = true;
  status: string;
  user = {
    idUser: 4535214,
    email: 'asselt-suringh@planet.nl',
    password: 'ytoakfx',
    name: 'Chris',
    surname: 'van Asselt',
    jwtToken: 223452
  };
  customer = new Customer();

  constructor(private chatService: ChatService, private el: ElementRef, private customerService: CustomerService) {
  }


  ngOnInit() {
    this.statusOnline();
    this.listenForRequests();
    this.getMessages();
  }

  sendMessage() {
    console.log('sending MEssage!!!');
    const msg = new Message(this.content, this.user);
    this.chatService.sendMessage(this.currentChat.chat.id, msg);
    this.content = '';
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

  openChat(index) {
    console.log('opening chat on index: ' + index);
    this.currentChat = this.chats[index];
    this.getCustomerInfo();
    this.chats[index].newMessages = false;
    this.isHidden = false;
  }

  listenForRequests() {
    this.chatService.listenForRequests().subscribe(token => {
      console.log('adding new chat...');
      this.chats.push(token);
      console.log('chat with id ' + token.chat.id);
      this.chatService.joinChat(token);
    });
  }

  getMessages() {
    this.chatService.getMessages().subscribe((token: MessageToken) => {
      console.log(this.currentChat);
      if (token.room === this.currentChat.chat.id) {
        this.currentChat.chat.messages.push(token.message);
        this.scrollToBottom();
      } else {
        for (const chatToken of this.chats) {
          if (chatToken.chat.id === token.room) {
            chatToken.chat.messages.push(token.message);
            chatToken.newMessages = true;
          }
        }
      }
    });
  }

  getCustomerInfo() {
    this.customerService.getCustomer(this.currentChat.client.idUser).subscribe(data => {
        this.customer = data;
        console.log(this.customer);
      }
  );
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.chat-messages');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
