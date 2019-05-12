
export class  Question {


  private _id:number;
  private _solved:boolean;
  private _title:string;
  private _question:string

  constructor(id: number, solved: boolean, title: string, question: string) {
    this._id = id;
    this._solved = solved;
    this._title = title;
    this._question = question;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get solved(): boolean {
    return this._solved;
  }

  set solved(value: boolean) {
    this._solved = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }
}
