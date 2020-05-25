import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../services/about.service';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpModule, Http } from '@angular/http';
import { GalleryService } from '../services/gallery.service';
import { ContactsService } from '../services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [AboutService,GalleryService,ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
