import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.less']
})
export class UserAvatarComponent implements OnInit {

  public imagesSrc: string[];
  constructor() {
    this.imagesSrc = [
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    ];
  }

  ngOnInit() {
  }

  openLink() {
    window.open('https://fr.gravatar.com');
  }

}
