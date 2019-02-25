import { Component, OnInit, Injectable, AfterViewInit} from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { ActivatedRoute } from '@angular/router';
declare var $ :any;
import 'hammerjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit,AfterViewInit {
  songs: any;
  lang_id:number;
  isRender = false;
  playedSongsArray=[];
  originallist=[];
  playedSongs:any;

  constructor(private _dataService: PlaylistService, private route: ActivatedRoute) { }

  ngOnInit() {
   
  }
  //to handle any additional initialization tasks, after Angular has fully initialized component's view
  ngAfterViewInit(){
     this.getSongList(); 
  }

     //to get english songs list 
  getEnglishSongs() {
      this._dataService.getEnglishSongs().subscribe(_dataService => {
      this.songs = _dataService;
      this.isRender = true;
      
    });
  }

  // to get hindi songs list
  getHindiSongs(){
      this._dataService.getHindiSongs().subscribe(_dataService => {
      this.songs = _dataService;
      this.isRender = true;
      
    });
  }

   //to show the respective songs list on language button click 
  getSongList() {
      this.route.queryParams.subscribe(params => {
      let id = params['page'];
      
      if (id == 99) {
        this.getEnglishSongs();
      }
      else if (id == 100) {
        this.getHindiSongs();

      }
    })
  }
  
   //play/pause songs from list
  playSong(list) {
    let source = document.getElementById('audio-player');
    let audio: any = document.getElementById('audio');
    source['src'] = list.file;
    this.playedSongs =list.name;
    audio.load(); //call this to just preload the audio without playing
    audio.play();
    
    this.playedSongsArray.unshift(this.playedSongs);
    
  }
  

}
