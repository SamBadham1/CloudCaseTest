import { Component } from '@angular/core';
import { TaxService } from '../tax-calculation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.css',
})
export class TaxCalculatorComponent {
  salary: number = 0;
  superRate: number = 0;

  constructor(public taxService: TaxService) {}

  calculateTax(): any {
    return this.taxService.calculateTax(this.salary);
  }

  calculateSuperannuation(): any {
    return this.taxService.calculateSuperannuation(this.salary, this.superRate);
  }
}
