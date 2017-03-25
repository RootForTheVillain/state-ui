import { Component, OnInit }  from '@angular/core';

import { User }               from '../users/user';
import { UserService }        from '../users/user.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicle.component.html'
})

export class VehicleComponent implements OnInit {

  private authUserId: number = 1;

  private authUser: User = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    //this.getUsers();

    this.getUser();

    //console.log(this.authUser.birthDate, this.currentDate.getTime(),new Date(this.authUser.birthDate).getTime());
    //this.getVehiclesForUser();
  }

  getUser(): void {
    this.userService.getUser(this.authUserId)
      .then(response => this.authUser = response);
  }
}
