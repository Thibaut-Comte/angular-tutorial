import { Component, OnInit, ViewChild } from '@angular/core';
import { Tweet } from '../tweet';
import {UserInputComponent} from '../user-input/user-input.component';
import { User } from '../user';
import { TweetsService } from '../tweets-service.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  @ViewChild(UserInputComponent)

  user: User;
  tweets: Tweet[];

  constructor(
    private tweetsService: TweetsService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user
      this.getTweets();
    })
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

  goToDetails(tweetId: number) {
    this.router.navigateByUrl('/detail/'+tweetId);
  }

}
