import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikedComponent } from './shared/component/liked/liked.component';
import { YoutubeLikeComponent } from './shared/component/youtube-like/youtube-like.component';

@NgModule({
  declarations: [
    AppComponent,
    LikedComponent,
    YoutubeLikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
