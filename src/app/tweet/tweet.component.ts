import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input()
  tweet: Tweet;
  @Input()
  user: User;

  addLike(user: User) {

    this.tweet.liked = true;
    this.tweet.likes.push(user);

  }

  constructor(
    private userService: UserService
  ) {
   }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user
    })
  }

}
