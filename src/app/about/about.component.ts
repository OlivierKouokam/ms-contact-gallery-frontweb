import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  infos:any;
  comments = [];
  commentaire = {date:null, message:''};
    
  constructor(private aboutService:AboutService) {
    this.infos = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit() {
  }
    
    // info = {
    //   nom: "Mohamed",
    //   email: "med@youssfi.net",
    //   tel: "0661326837"
    // }
    // comments = [
    //   {date: new Date(), message: "A"},
    //   {date: new Date(), message: "B"},
    //   {date: new Date(), message: "C"}
    // ];
  // commentaire = {
  //   date:null, 
  //   message:''
  // };
  newComment = false;

  onAddCommentaire(c) {
    this.aboutService.addComment(c);
    this.commentaire.message = "";
    this.comments = this.aboutService.getAllComments();
  }
    // onAddCommentaire() {
    //   if (this.commentaire.message != '') {
    //     this.commentaire.date = new Date();
    //     this.comments.push({
    //       date: this.commentaire.date,
    //       message: this.commentaire.message
    //     });
    //   this.commentaire.message = '';
    //   }
    // }
}
