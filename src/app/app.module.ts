import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';

import {TimeAgoPipe} from 'time-ago-pipe';
import {FormsModule} from '@angular/forms';
import { UserInputComponent } from './user-input/user-input.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimeAgoPipe,
    UserInputComponent,
    TweetDetailComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
