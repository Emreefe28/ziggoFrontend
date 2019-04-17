import {QuestionContent} from "./questioncontent.model";

export class  Question extends QuestionContent{


  categorieId : number;
  catNaam:string;
  vragen:[QuestionContent];

  //
  // //vraag
  // questionId: number;
  // titel: string;
  // content: string;

}
