import { Component, OnInit, ViewChild } from '@angular/core';
import { Tweet } from '../tweet';
import {UserInputComponent} from '../user-input/user-input.component';
import { User } from '../user';
import { TweetsService } from '../tweets-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  @ViewChild(UserInputComponent)

  user: User;
  tweets: Tweet[];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.getTweets();
  }

  addTweet(text: any) {

    let tweet: Tweet = {

      id: this.tweets.length+1,
      created_at: new Date().toString(),
      text: text,
      likes: [],
      liked: false,
      user: this.user
         
    };

    this.tweets.push(tweet);

  }

  addLike(id: number) {

    let index = id;

    let tweet: Tweet = this.tweets.find(function(tweet) {
      return id == tweet.id
    });

    tweet.liked = true;
    tweet.likes.push(this.user);

  }

  getTweets(): void {
    this.tweets = this.tweetsService.getTweets();
  }

}
