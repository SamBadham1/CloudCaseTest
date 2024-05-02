import { Routes } from '@angular/router';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { DesignChoicesComponent } from './design-choices/design-choices.component';
export const routes: Routes = [
  { path: '', component: OnboardingFormComponent },
  { path: 'Tax-Calculator', component: TaxCalculatorComponent },
  { path: 'Design-choices', component: DesignChoicesComponent },
];
