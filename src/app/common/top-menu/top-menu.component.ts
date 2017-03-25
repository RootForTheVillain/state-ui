/*import { Component, OnInit } from '@angular/core';

import { User } from '../../users/user';
import { UserService } from '../../users/user.service';

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  templateUrl: './top-menu.component.html'
})

export class TopMenuComponent implements OnInit {

  private authUserId = 1;
  authenticatedUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.authUserId)
      //.then(response => this.authenticatedUser = response);
      .then(function(response) {
        response => this.authenticatedUser = response;
        console.log(this.authenticatedUser = response, this.authenticatedUser);
      })
  }

}*/
