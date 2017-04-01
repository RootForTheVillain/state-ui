import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { UtilsService }             from '../common/utils.service';
import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';
import { Vehicle }                  from '../vehicles/vehicle';
import { VehicleService }           from '../vehicles/vehicle.service';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  moduleId: module.id
})

export class HomeComponent implements OnInit {
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private vehiclesToRenew: Vehicle[] = [];

  constructor(
    private utilsService: UtilsService,
    private userService: UserService,
    private vehicleService: VehicleService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    console.log('HomeComponent.ngOnInit()')

    /*this.vehicleService.getRenewals(1,
      new Date().getUTCFullYear(),
      new Date().getMonth())
    .subscribe(response => this.vehiclesToRenew = response);*/

    this.route.params
      .switchMap((params: Params) => {
        let year = (params['year']) ? params['year']: new Date().getUTCFullYear();
        let month = (params['month']) ? this.utilsService.convertMonthToNumber(params['month']): new Date().getMonth();
        return this.vehicleService.getRenewals(+params['id'], +year, +month);
      })
      .subscribe(response => this.vehiclesToRenew = response);






    /*this.route.params.subscribe(params => {
        console.log('HomeComponent.0',
          params['id']);
    });

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {

        console.log('HomeComponent.1',
          val.state.root.firstChild.params['id'],
          val.state.root.firstChild.params['year'],
          //this.app.convertMonthToNumber(val.state.root.firstChild.params['month'])
          val.state.root.firstChild.params['month'])

        this.vehicleService.getRenewals(+val.state.root.firstChild.params['id'],
          +val.state.root.firstChild.params['year'],
          +this.utilsService.convertMonthToNumber(val.state.root.firstChild.params['month']))
        .subscribe(response => this.vehiclesToRenew = response);
      }
    });*/
  }
}
