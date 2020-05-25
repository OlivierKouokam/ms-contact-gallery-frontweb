import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GalleryService{
    
    constructor(private http:Http){

    }

    search(motCle:string, size:number, page:number){
        return this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
          +motCle+"&image_type=photo&per_page="+size+"&page="+page)
          .map(resp=>resp.json());
      }
}