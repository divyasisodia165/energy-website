// free-trial.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FaqStates {
  whatIsFreeTrial: boolean;
  howOldDoINeed: boolean;
  howManyFreeTrials: boolean;
  canAnyoneBook: boolean;
}

@Component({
  selector: 'app-free-trial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})
export class FreeTrial {
  // FAQ accordion states
  faqStates: FaqStates = {
    whatIsFreeTrial: false,
    howOldDoINeed: false,
    howManyFreeTrials: false,
    canAnyoneBook: false
  };

  // Form data
  formData = {
    gym: '',
    howDidYouHear: '',
    title: '',
    gender: '',
    firstName: '',
    lastName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    postcode: '',
    mobilePhone: '',
    contactByEmail: false,
    contactByText: false,
    contactByPhone: false
  };

  // Generate arrays for dropdowns
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  years = Array.from({ length: 100 }, (_, i) => 2024 - i);

  // Toggle FAQ accordion
  toggleFaq(faqKey: keyof FaqStates): void {
    this.faqStates[faqKey] = !this.faqStates[faqKey];
  }

  // Submit form
  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }
}