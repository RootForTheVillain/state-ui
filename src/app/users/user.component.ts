import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  //styleUrls: [ '../hero-detail.component.css' ],
  moduleId: module.id
})

export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
