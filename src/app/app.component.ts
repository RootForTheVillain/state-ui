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

  private users: User[];

  private authUser: User = new User();
  private currentDate: Date = new Date();

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

    this.getUsers();

    this.getUser();

    //console.log(this.authUser.birthDate, this.currentDate.getTime(),new Date(this.authUser.birthDate).getTime());
    //this.getVehiclesForUser();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(response => this.users = response);
  }

  getUser(): void {
    this.userService.getUser(this.authUserId)
      .then(response => this.authUser = response);
  }

  /*getVehiclesForUser(): void {
    this.userService.getVehiclesForUser(this.authUserId)
      .subscribe(response => this.vehicles = response);
  }*/
}
