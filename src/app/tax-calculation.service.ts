import { Injectable } from '@angular/core';
import { TAX_THRESHOLDs } from './taxes';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  // Hard coded version to check my math
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
//Version that pulls from constants for future proofing
  calculateTaxFromStoredValues(salary: number) {
    //Sort by lowest to highest
    TAX_THRESHOLDs.sort((a, b) => a.threshold - b.threshold);

    let tax = 0;
    if (salary > 0) {
      for (let i = 1; i < TAX_THRESHOLDs.length; i++) {
        const { threshold: prevThreshold, rate: prevRate } =
          TAX_THRESHOLDs[i - 1];
        const { threshold, rate } = TAX_THRESHOLDs[i];

        if (salary <= threshold) {
          tax += (salary - prevThreshold) * prevRate;
          return this.roundingAndFloat(tax);
        } else {
          tax += (threshold - prevThreshold) * prevRate;
        }
      }

      // For salary exceeding the last threshold
      const { threshold: lastThreshold, rate: lastRate } =
        TAX_THRESHOLDs[TAX_THRESHOLDs.length - 1];
      tax += (salary - lastThreshold) * lastRate;
      return this.roundingAndFloat(tax);
    } else {
      return 'N/A';
    }
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
