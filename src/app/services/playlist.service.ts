import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  
  constructor(private http: HttpClient) { }

  getEnglishSongs(){
    return this.http.get("assets/json/english.json" )
  }

  getHindiSongs() {
    return this.http.get("assets/json/hindi.json")
  }
}
