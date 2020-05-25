import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any; // = {hits:[]};
  currentPage:number = 1;
  totalPages:number;
  size:number = 25;
  motCle:string="";
//pages:Array<number>=[];
  pages:any;
  constructor(private galleryService:GalleryService) { }

  ngOnInit() {
  }
  onSearch(dataForm){
    // this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
    //   +dataForm.motCle+"&per_page=10&page=1")
    //   .map(resp=>resp.json())
    //   .subscribe(data=>{
    //     console.log(data);
    //     this.pagePhotos = data;
    //   });
    this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
    .subscribe(data=>{
      this.pagePhotos = data;
      this.totalPages = data.totalHits/this.size;
      if (data.totalHits % this.size) {
        this.totalPages++;
      }
      this.pages = new Array(this.totalPages);
    },err=>{
      console.log(err);
      alert('Aucun accès à Internet')
    });
  }
  goToPage(i){
    this.currentPage = i+1;
    this.onSearch({motCle:this.motCle});
  }
}
