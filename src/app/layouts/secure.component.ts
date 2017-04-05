import { Component, OnInit, ViewEncapsulation }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { UtilsService }             from '../common/utils.service';
import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';
import { Vehicle }                  from '../vehicles/vehicle';
import { VehicleService }           from '../vehicles/vehicle.service';

@Component({
  moduleId: module.id,
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: [ './secure.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class SecureComponent implements OnInit {
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private vehiclesToRenew: Vehicle[] = [];

  private selectedMonth: number = this.currentDate.getMonth();
  private MONTHS: string[];

  constructor(
    private utils: UtilsService,
    private userService: UserService,
    private router: Router) {
      this.MONTHS = this.utils.getMonths();
    }

  ngOnInit(): void {
    this.authUser = this.userService.getAuthenticatedUser();
  }

  onMonthChange(id: number, year: number, month: string): void {
    this.selectedMonth = +this.utils.convertMonthToNumber(month);
    this.router.navigate(['users/' + this.authUser.id + '/vehicles/' + year + '/' + month]);
  }
}
