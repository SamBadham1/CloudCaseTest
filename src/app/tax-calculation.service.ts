import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  calculateTax(salary: number) {
    let tax = 0;
    if (salary > 0) {
      if (salary <= 18200) {
        tax = 0;
      } else if (salary <= 37000) {
        tax = (salary - 18200) * 0.19;
      } else if (salary <= 90000) {
        tax = 3572 + (salary - 37000) * 0.325;
      } else if (salary <= 180000) {
        tax = 20797 + (salary - 90000) * 0.37;
      } else {
        tax = 54097 + (salary - 180000) * 0.45;
      }
      return this.roundingAndFloat(tax);
    } else return 'N/A';
  }

  calculateSuperannuation(salary: number, superRate: number) {
    if (superRate > -1 && superRate < 101) {
      return this.roundingAndFloat(salary * (superRate / 100));
    } else return 'N/A';
  }

  roundingAndFloat(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
}
