import { Component, OnInit }  from '@angular/core';

import { Router }             from '@angular/router';

import { User }               from '../../users/user';
import { UserService }        from '../../users/user.service';

import { UtilsService }       from '../../common/utils.service';

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
    private router: Router,
    private userService: UserService,
    private utils: UtilsService) {}

  ngOnInit(): void {
    this.authUser = this.userService.getAuthenticatedUser();

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

  logout(): void {
    this.userService.logout();
    this.router.navigate([ 'login' ]);
  }
}
