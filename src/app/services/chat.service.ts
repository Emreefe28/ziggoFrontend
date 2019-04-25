import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat} from '../models/chat/chat.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  public whosOnline(): Observable<number> {
    this.socket.emit('who-is-on');
    return Observable.create((observer) => {
      this.socket.on('whos-online', (data) => {
        observer.next(data);
        console.log(data);
      });
    });
  }

  public connectToEmployee(user, chat: Chat) {
    const token = {room: chat.created, client: user};
    this.socket.emit('match', token);
  }

  public listenForRequests() {
    return Observable.create((observer) => {
      this.socket.on('chat-request', (data) => {
        observer.next(data);
        console.log(data);
      });
    });
  }

  public joinRoom(user, room) {
    const token = {roomId: room, client: user};
    this.socket.emit('accept-request', token);
  }

  public whoJoinedRoom() {
    return Observable.create((observer) => {
      this.socket.on('request-re', (data) => {
        observer.next(data);
        console.log(data);
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
}
