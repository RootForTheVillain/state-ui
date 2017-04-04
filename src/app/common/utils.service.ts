import { Injectable }           from '@angular/core';

import {
  Headers,
  RequestOptions
} from '@angular/http';

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

  convertMonthToNumber(month: string): number {
    if (typeof parseInt(month) === 'number') {
      return +month;
    }

    for (let i in this.MONTHS) {
      if (this.MONTHS[i].toLowerCase() === month.toLowerCase()) {
        return +i;
      }
    }
  }

  getMonths(): string[] {
    return this.MONTHS;
  }

  getHeaders(headers?: Object[]): RequestOptions {
    let heads = new Headers({ Accept: 'application/json' });
    heads.append('Content-Type', 'application/vnd.michigan.v1+json');

    if (typeof headers != 'undefined') {
      for (var obj of headers) {
        for (let key in obj) {
          heads.append(key, obj[key]);
        }
      }
    }

    return new RequestOptions({ headers: heads });
  }
}
