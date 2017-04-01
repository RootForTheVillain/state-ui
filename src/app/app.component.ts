import { Component, OnInit }        from '@angular/core';

import {
  ActivatedRoute, Router, Params, RoutesRecognized
}  from '@angular/router';

import { Location }                 from '@angular/common';

import { User }                     from './users/user';
import { UserService }              from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id
})

export class AppComponent implements OnInit {

  static readonly TENANT = 'michigan.gov';
  private authUser: User = new User();
  private currentDate: Date = new Date();
  private timeOfDay: string;
  private selectedMonth: number = this.currentDate.getMonth();

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

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
      localStorage.setItem('auth_token', 'true');
      localStorage.setItem('auth_user', '1');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('AppComponent.params[id]', params['id']);
    });

    /**
      * This is a disaster. There's no way this is how you're supposed to do this
      */
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.userService.getUser(+val.state.root.firstChild.params['id'])
        .then(response => {
          this.authUser = response;
          this.selectedMonth = this.convertMonthToNumber(val.state.root.firstChild.params['month']);
        });
      }
    });
  }

  onMonthChange(id: number, year: number, month: string): void {
    console.log('AppComponent.onMonthChance() called')
    console.log(id, year, month)
    this.router.navigate(['users/' + id + '/' + year + '/' + month.toLowerCase()]);
  }

  convertMonthToNumber(month: string): number {
    for (let i in this.MONTHS) {
      if (this.MONTHS[i].toLowerCase() === month.toLowerCase()) {
        return +i;
      }
    }
  }

  getMonths(): string[] {
    return this.MONTHS;
  }
}
