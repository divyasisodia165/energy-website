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
  
  selectedCountry: string = 'India';
  selectedLocation: string = '';
  showLoginForm: boolean = false;

  countries: string[] = [
    'India'
  ];

  locations: string[] = [
    'Mumbai',
    'Indore'
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
