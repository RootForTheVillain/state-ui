import { Component, OnInit }  from '@angular/core';

import { User }               from './users/user';
import { UserService }        from './users/user.service';
import { Vehicle }            from './vehicles/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id
})

export class AppComponent implements OnInit {

  private authUserId: number = 1;

  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;

  private MONTHS: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();

    let currentHours = this.currentDate.getHours();
    if (currentHours < 12) {
       this.timeOfDay = 'morning';
    } else if (currentHours > 12 && currentHours < 18) {
        this.timeOfDay = 'afternoon';
    } else {
      this.timeOfDay = 'evening';
    }
  }

  getUser(): void {
    this.userService.getUser(this.authUserId)
      .then(response => {
        this.authUser = response;

        // Capitalize first letter in first name
        this.authUser.firstName = this.authUser.firstName.charAt(0).toUpperCase() +
          this.authUser.firstName.slice(1, this.authUser.firstName.length).toLowerCase();
      });
  }

  /*getUsers(): void {
    this.userService.getUsers()
      .subscribe(response => this.users = response);
  }*/
}
