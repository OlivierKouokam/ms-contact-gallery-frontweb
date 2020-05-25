import { Injectable } from "@angular/core";

@Injectable()
export class AboutService{
    info = {
        nom: "KOUOKAM",
        email: "kouokamcarl@gmail.com",
        tel: "00237655669977"
      }
      comments = [
        {date: new Date(), message: "A"},
        {date: new Date(), message: "B"},
        {date: new Date(), message: "C"}
      ];
      addComment(c){
        c.date = new Date();
        this.comments.push(c);
      }
      getAllComments(){
          return this.comments;
      } 
      getInfo(){
          return this.info;
      }
}
