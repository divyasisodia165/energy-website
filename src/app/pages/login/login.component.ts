import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,  // IMPORTANT
  imports: [CommonModule, FormsModule], // FIXES *ngFor, *ngIf, ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  selectedCountry: string = 'United Kingdom';
  selectedLocation: string = '';
  showLoginForm: boolean = false;

  countries: string[] = [
    'United Kingdom',
    'United States',
    'Canada',
    'Australia',
    'India'
  ];

  locations: string[] = [
    'London',
    'Manchester',
    'Birmingham',
    'Leeds',
    'Glasgow'
  ];

  onCountryChange(): void {
    this.selectedLocation = '';
    this.showLoginForm = false;
  }

  onLocationChange(): void {
    if (this.selectedLocation) {
      this.showLoginForm = true; // show email/password form
    }
  }

  email: string = '';
  password: string = '';

}
