import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public login(user) {
    this.socket.emit('login', user);
  }

  public logout(user) {
    this.socket.emit('logout', user);
  }

  public chatRequest(token) {
    this.socket.emit('chat-request', token);
  }

  public getRoom(): Observable<string> {
    return Observable.create((observer) => {
      this.socket.on('chatroom', (chatroom) => {
        observer.next(chatroom);
      });
    });
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  public createRoom(author) {
    this.socket.emit('create', 'room1');
  }

  public joinRoom(room) {
    this.socket.emit('join', room);
  }

}
