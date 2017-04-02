import { Injectable }           from '@angular/core';

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

  /*convertNumberToMonth(num: number): string {
    for (let i in this.MONTHS) {
      if (i === num) {
        return this.MONTHS[i];
      }
    }
  }*/

  getMonths(): string[] {
    return this.MONTHS;
  }
}
