import { TestBed } from '@angular/core/testing';

import { TaxService } from './tax-calculation.service';

describe('TaxCalculationService', () => {
  let service: TaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TaxService] });
    service = TestBed.inject(TaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate tax correctly', () => {
    // Test data
    const salary = 200000;
    const expectedTax = 63097; // Expected tax based on provided calculation

    // Call the function to be tested
    const calculatedTax = service.calculateTax(salary);

    // Assert that the calculated tax matches the expected tax
    expect(calculatedTax).toEqual(expectedTax);
  });

  it('should calculate superannuation correctly', () => {
    // Test data
    const salary = 100000;
    const superRate = 9.5;
    const expectedSuper = 9500; // Expected superannuation based on provided calculation

    // Call the function to be tested
    const calculatedSuper = service.calculateSuperannuation(salary, superRate);

    // Assert that the calculated superannuation matches the expected superannuation
    expect(calculatedSuper).toEqual(expectedSuper);
  });

  it('should round numbers correctly', () => {
    // Test data
    const num = 12.345;
    const expectedRoundedNum = 12.35; // Expected rounded number based on provided calculation

    // Call the function to be tested
    const roundedNum = service.roundingAndFloat(num);

    // Assert that the rounded number matches the expected rounded number
    expect(roundedNum).toEqual(expectedRoundedNum);
  });
});
