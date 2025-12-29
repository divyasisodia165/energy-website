import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule   // 👈 THIS FIXES routerLink ERROR
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  
  constructor() { }

  onFindClub(): void {
    // Navigate to club finder page or implement functionality
    console.log('Find a Club Near You clicked');
  }

  onBookVisit(): void {
    // Navigate to booking page or implement functionality
    console.log('Book a Free Visit clicked');
  }

}