import { Component, ViewEncapsulation }                 from '@angular/core';
import { ActivatedRoute, Params }                       from '@angular/router';
import { Location }                                     from '@angular/common';

import 'rxjs/add/operator/switchMap';

//import { UtilsService }                                 from '../common/utils.service';
import { User }                                         from '../users/user';
import { UserService }                                  from '../users/user.service';
import { Vehicle }                                      from '../vehicles/vehicle';
import { VehicleService }                               from '../vehicles/vehicle.service';

@Component({
  moduleId: module.id,
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: [ './public.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class PublicComponent {
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private vehiclesToRenew: Vehicle[] = [];

  constructor(
    //private utils: UtilsService,
    private userService: UserService,
    private vehicleService: VehicleService,
    private route: ActivatedRoute) {}
}
