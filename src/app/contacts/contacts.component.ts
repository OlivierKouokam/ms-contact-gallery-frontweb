import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(private http:Http, private contactService:ContactsService,
              private router:Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch(){
    this.contactService.getContacts(this.motCle,this.currentPage,this.size)
      .subscribe(data => {
        console.log(data);
        console.log(this.currentPage);
        this.pageContacts=data;
        this.pages = new Array(data.page.totalPages);
      },error1 => {
        console.log(error1);
      })
  }
  chercher(){
    this.doSearch();
  }
  goToPage(i:number){
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['/edit-contact',id])
  }

  onDeleteContact(c:Contact){
    let confirm=window.confirm('Etes-vous sûr ?')
    if(confirm==true){
      this.contactService.deleteContact(c.id)
        .subscribe(data=>{
          //console.log(data);
          //console.log(this.pageContacts);
          //this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
          this.doSearch();
        },err=>{
          console.log(err)
        })
    }
  }
}
