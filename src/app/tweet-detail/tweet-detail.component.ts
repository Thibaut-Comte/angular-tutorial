import { Component, OnInit, Input } from '@angular/core';
import { TweetsService } from '../tweets-service.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../tweet';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.less']
})
export class TweetDetailComponent implements OnInit {
  @Input()
  tweet: Tweet;
  @Input()
  user: User;

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getTweet();
    this.userService.user.subscribe(user => {
      this.user = user;
    })
  }

  getTweet() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tweet = this.tweetService.getTweetById(id);
  }

}
