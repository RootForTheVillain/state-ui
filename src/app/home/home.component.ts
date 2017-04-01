import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Route, Router, RoutesRecognized }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { AppComponent }             from '../app.component';
import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';
import { Vehicle }                  from '../vehicles/vehicle';
import { VehicleService }           from '../vehicles/vehicle.service';

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
    private app: AppComponent,
    private userService: UserService,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('HomeComponent', params['id']);
    });

    /**
      * This is a disaster. There's no way this is how you're supposed to do this
      */
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.vehicleService.getRenewals(+val.state.root.firstChild.params['id'],
          +val.state.root.firstChild.params['year'],
          +this.app.convertMonthToNumber(val.state.root.firstChild.params['month']))
        .subscribe(response => this.vehiclesToRenew = response);
      }
    });
  }
}
