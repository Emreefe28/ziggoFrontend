import {Component, ElementRef, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {ChatToken} from '../../models/chat/chat-token.model';
import {MessageToken} from '../../models/chat/message-token.model';
import {Message} from '../../models/chat/message.model';
import {AuthenticationService} from '@customer//_services';
import {User} from '../../models/user.model';
import {Subscription} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CloseDialogComponent} from '../employee/chat/close-dialog/close-dialog.component';
import {RatingDialogComponent} from './rating-dialog/rating-dialog.component';
import {Chat} from '../../models/chat/chat.model';

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
  user: User;
  currentUserSubscription: Subscription;
  rateDialog: MatDialogRef<RatingDialogComponent>;

  constructor(private chatService: ChatService,
              private el: ElementRef,
              private authenticationService: AuthenticationService,
              private dialog: MatDialog) {
    this.authenticationService.checkIfLoggedIn();
    if (authenticationService.loggedIn === true) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.user = user;
      });
    }
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
    this.chatService.hasChatEnded().subscribe(() => {
      this.isHidden = true;
      this.rateChat();
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

  rateChat() {
    this.rateDialog = this.dialog.open(RatingDialogComponent);
    this.rateDialog.afterClosed().subscribe(rating => {
      this.chatService.rateChat(this.chatToken.chat.id, rating).subscribe(
        (data: Chat) => {
          console.log(data);
        },
        (error: any) => console.log(error)
      );
    });
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.chat-messages');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}

