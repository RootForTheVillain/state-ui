import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Route, Router, RoutesRecognized }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';
import { Vehicle }                  from '../vehicles/vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  moduleId: module.id
})

export class HomeComponent implements OnInit {
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private vehiclesToRenew: Vehicle[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {}

  ngOnInit(): void {
    /**
      * This is a disaster. There's no way this is how you're supposed to do this
      */
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.userService.getUser(+val.state.root.firstChild.params['id'])
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
    });
  }
}
