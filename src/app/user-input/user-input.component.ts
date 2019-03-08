import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.less']
})
export class UserInputComponent implements OnInit {
  @Input()
  user: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    })
  }

  handleUserChange() {
    this.userService.setUser(this.user);
  }

}
