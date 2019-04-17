import {QuestionContent} from "./questioncontent.model";

export class  Question extends QuestionContent{


  catId : number;
  catNaam:string;
  vraag:[QuestionContent];

  //
  // //vraag
  // questionId: number;
  // titel: string;
  // content: string;

}
