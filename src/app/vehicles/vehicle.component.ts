import { Component, OnInit }  from '@angular/core';

import { Vehicle }             from './vehicle';
import { User }               from '../users/user';
import { UserService }        from '../users/user.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicle.component.html'
})

export class VehicleComponent implements OnInit {

  private authUserId: number = 1;

  private authUser: User = new User();

  private vehiclesToRenew: Vehicle[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.authUserId)
      .then(response => {
        this.authUser = response;

        // Only show vehicles expiring within a month of the expiration date
        let currentMonth = new Date().getMonth();
        for (let vehicle of this.authUser.vehicles) {
          let monthOfExpiration = new Date(vehicle.plateExpiration).getMonth();
          if (monthOfExpiration === currentMonth
            || monthOfExpiration - 1 === currentMonth) {
              this.vehiclesToRenew.push(vehicle);
          }
        }
      });
  }
}
