import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat} from '../models/chat/chat.model';
import {User} from '../models/user.model';
import {ChatToken} from '../models/chat/chat-token.model';
import {Message} from '../models/chat/message.model';
import {MessageToken} from '../models/chat/message-token.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  private serviceUrl = 'http://localhost:8080/VodafoneZiggoApi-1.2/services/rest/chat';

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  public whosOnline(): Observable<number> {
    this.socket.emit('who-is-on');
    return Observable.create((observer) => {
      this.socket.on('who-is-on', (user) => {
        observer.next(user);
        console.log(user);
      });
    });
  }

  public connectToEmployee(token: ChatToken) {
    token.chat.id = token.timestamp + token.client.surname.toLowerCase();

    this.socket.emit('match', token);
  }

  public listenForRequests(): Observable<ChatToken> {
    console.log('listening...');
    return Observable.create((observer) => {
      this.socket.on('chat-request', (token: ChatToken) => {
        observer.next(token);
        console.log(token);
      });
    });
  }

  public joinChat(token: ChatToken) {
    this.socket.emit('request-re', token);
  }

  public whoJoinedRoom(): Observable<ChatToken> {
    return Observable.create((observer) => {
      this.socket.on('request-re', (data) => {
        observer.next(data);
        console.log(data);
      });
    });
  }

  public sendMessage(room: string, message: Message) {
    console.log('sending message');
    const token = new MessageToken(room, message);
    this.socket.emit('new-message', token);
  }

  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  public checkIn(user: User) {
    const employee = {socketId: null, employee: user};
    this.socket.emit('check-in', employee);
  }

  public checkOut() {
    this.socket.emit('check-out');
  }

  public endChat(chat: Chat) {
    this.socket.emit('end-chat', chat.id);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Chat>(this.serviceUrl, chat, {headers});
  }

  public hasChatEnded() {
    return Observable.create((observer) => {
      this.socket.on('end-chat', () => {
        observer.next();
      });
    });
  }
  public rateChat(chatId: string, rating: number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Chat>(this.serviceUrl + '/' + chatId + '/rating', rating, {headers});
  }
}
