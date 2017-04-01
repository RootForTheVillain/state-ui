import { Injectable }           from '@angular/core';

import {
  ActivatedRoute, Params, Route, Router, RoutesRecognized
} from '@angular/router';

@Injectable()
export class UtilsService {

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
      private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log('UtilsService:',
              params['id']);
        });
      }

  getRouteParams(): void {

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














