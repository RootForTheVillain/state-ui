import { Component, OnInit } from '@angular/core';

import { User } from '../../users/user';
import { UserService } from '../../users/user.service';

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  templateUrl: './top-menu.component.html'
})

export class TopMenuComponent implements OnInit {
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;

  constructor(
    private userService: UserService) {}

  ngOnInit(): void {
    this.authUser = this.userService.getAuthenticatedUser();
    if (this.authUser === null) {

      console.log('TopMenuComponent -> authUser = null, setting authUser....')

      this.userService.getUser(1).then(response => {
        this.authUser = response;
        this.userService.setAuthenticatedUser(this.authUser);
      });
    }

    // Get time of day
    let currentHours = this.currentDate.getHours();
    if (currentHours < 12) {
       this.timeOfDay = 'morning';
    } else if (currentHours > 12 && currentHours < 18) {
        this.timeOfDay = 'afternoon';
    } else {
      this.timeOfDay = 'evening';
    }
  }
}
