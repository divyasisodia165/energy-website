import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-refer-friend',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.css'] // CSS file exist honi chahiye
})
export class ReferFriend {
  selectedGym: string = '';

  gyms: string[] = [
    'Downtown Fitness Center',
    'Westside Gym',
    'East Coast Athletic Club',
    'Mountain View Fitness',
    'City Center Gym'
  ];

  onGymSelect(event: any): void {
    this.selectedGym = event.target.value;
    console.log('Selected gym:', this.selectedGym);
  }

  onSubmit(): void {
    if (this.selectedGym) {
      console.log('Starting referral process for:', this.selectedGym);
      // Referral logic here
    } else {
      alert('Please select a gym first');
    }
  }
}
