export class Message {
  id: string;
  sentAt: Date;
  author: string;
  content: string;
  room: string;
  constructor() {
    this.sentAt = new Date();
  }
}
