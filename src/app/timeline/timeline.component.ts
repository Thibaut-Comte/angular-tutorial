import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  tweets: Tweet[] = [
    {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock',
      likes: [],
      liked: false
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso',
      likes: [],    
      liked: false
        
    },
  ];

  ngOnInit() {
  }

  user: string;

  addTweet(text: any) {

    let tweet: Tweet = {

      id: this.tweets.length+1,
      created_at: new Date().toString(),      
      user: this.user,
      text: text,
      likes: [],
      liked: false      

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

  ngAfterViewInit() {

  }

}
