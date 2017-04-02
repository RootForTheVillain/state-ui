import { Component, OnInit }        from '@angular/core';

import {
  ActivatedRoute, Router, Params, RoutesRecognized
}  from '@angular/router';

import { Location }                 from '@angular/common';

import { User }                     from './users/user';
import { UserService }              from './users/user.service';

import { UtilsService }                 from './common/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id
})

export class AppComponent implements OnInit {

  //static readonly TENANT = 'michigan.gov';
  private authUser: User;
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private selectedMonth: number = this.currentDate.getMonth();
  private MONTHS: string[];

  constructor(
    private utilsService: UtilsService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
      this.MONTHS = utilsService.getMonths();
  }

  ngOnInit(): void {
    this.authUser = this.userService.getAuthenticatedUser();
    if (this.authUser === null) {
      this.router.navigate(['users/login']);
      console.log('AppComponent: authUser is null')
    }
  }

  onMonthChange(id: number, year: number, month: string): void {
    console.log('onMonthChange:', id, year, month)
    this.selectedMonth = +this.utilsService.convertMonthToNumber(month);
    this.router.navigate(['users/' + this.authUser.id + '/vehicles/' + year + '/' + month]);
  }
}






















