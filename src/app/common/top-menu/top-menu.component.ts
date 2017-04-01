import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router, RoutesRecognized }   from '@angular/router';
import { Location }                 from '@angular/common';

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
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {}

  ngOnInit(): void {
    // Get route params from parent Component
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {

console.log('top-menu-component.ts: ', val.state.root.firstChild.params['id'])

        if (isNaN(+val.state.root.firstChild.params['id'])) {
          console.log('top-menu-component.ts: id isNaN')
        }

        /*this.userService.getUser(+val.state.root.firstChild.params['id'])
          .then(response => this.authUser = response);*/
      }
    });

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
