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

  /*ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(response => {
        this.authUser = response;

        // Capitalize first letter in first name
        this.authUser.firstName = this.authUser.firstName.charAt(0).toUpperCase() +
          this.authUser.firstName.slice(1, this.authUser.firstName.length).toLowerCase();
      });
  }*/

  ngOnInit(): void {
    // Get route params from parent Component
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.userService.getUser(+val.state.root.firstChild.params['id'])
        .then(response => {
          this.authUser = response;

          // Capitalize first letter in first name
          this.authUser.firstName = this.authUser.firstName.charAt(0).toUpperCase() +
            this.authUser.firstName.slice(1, this.authUser.firstName.length).toLowerCase();
        });
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
