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
