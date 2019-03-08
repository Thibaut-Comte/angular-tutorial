import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets-service.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.less']
})
export class CreateTweetComponent implements OnInit {

  user: User;

  constructor(
    private tweetService: TweetsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user=> {
      this.user = user;
    });
  }

  addTweet(text: string) {
    this.tweetService.addTweet(text, this.user);
    this.router.navigateByUrl('/timeline');
  }

}
