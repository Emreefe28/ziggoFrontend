
export class  Category {

    private _categoryId:number;
    private _name:String;


  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  constructor(categoryId: number, name: String) {
    this._categoryId = categoryId;
    this._name = name;
  }
}
