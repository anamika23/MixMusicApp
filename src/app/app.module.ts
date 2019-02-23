import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageComponent } from './language/language.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { NgxSoundmanager2Module } from 'ngx-soundmanager2'

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSoundmanager2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
