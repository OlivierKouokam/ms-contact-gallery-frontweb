import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contacts';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  contact:Contact = new Contact();
  mode:number=1;
  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(){
    this.contactsService.saveContact(this.contact)
      .subscribe(data=>{
        this.contact = data;
        this.mode=2;
      },err=>{
        console.log(err);
      });
  }
  onResetContact(){
    //this.contact = {nom:"",prenom:"",email:"",dateNaissance:null,tel:237}
    this.contact.nom = "";
    this.contact.prenom = "";
    this.contact.dateNaissance = null;
    this.contact.email = "";
    this.contact.tel = 237;
  }
}
