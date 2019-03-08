import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Tweet } from 'src/app/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  user1: User = { name: 'James'};
  user2: User = { name: 'Bob'};

  tweets: Tweet[] = [
    {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: this.user1,
      likes: [],
      liked: false
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: this.user2,
      likes: [],    
      liked: false
        
    },
  ];

  constructor() { }

  getTweets() {
    return this.tweets
  }
}
