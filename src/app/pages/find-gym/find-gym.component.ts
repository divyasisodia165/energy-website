import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// ⭐ Added imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Gym {
  name: string;
  location: string;
}

@Component({
  selector: 'app-find-gym',
  standalone: true,   // ⭐ Important
  imports: [CommonModule, FormsModule],  // ⭐ Important
  templateUrl: './find-gym.component.html',
  styleUrls: ['./find-gym.component.css']
})
export class FindGymComponent implements OnInit {
  searchPostcode: string = '';
  selectedTab: string = 'INDIA';
  selectedCountry: string = 'INDIA';
  mapUrl: SafeResourceUrl = '';
  
  gymLocations = [
    { lat: 28.6139, lng: 77.2090, count: 25, address: 'Delhi, India' },
    { lat: 19.0760, lng: 72.8777, count: 35, address: 'Mumbai, India' },
    { lat: 12.9716, lng: 77.5946, count: 28, address: 'Bangalore, India' }
  ];

  indiaGyms: Gym[] = [
    { name: 'CONNAUGHT PLACE GYM', location: 'Connaught Place, New Delhi, India' },
    { name: 'SOUTH EXTENSION GYM', location: 'South Extension, New Delhi, India' },
    { name: 'KAROL BAGH GYM', location: 'Karol Bagh, New Delhi, India' },
    { name: 'ROHINI GYM', location: 'Rohini, New Delhi, India' },
    { name: 'DWARKA GYM', location: 'Dwarka, New Delhi, India' },
    { name: 'NOIDA SECTOR 18 GYM', location: 'Sector 18, Noida, Uttar Pradesh, India' },
    { name: 'GURGAON CYBER CITY GYM', location: 'Cyber City, Gurgaon, Haryana, India' },
    { name: 'ANDHERI GYM', location: 'Andheri, Mumbai, Maharashtra, India' },
    { name: 'BANDRA GYM', location: 'Bandra, Mumbai, Maharashtra, India' },
    { name: 'KORAMANGALA GYM', location: 'Koramangala, Bangalore, Karnataka, India' },
    { name: 'INDIRANAGAR GYM', location: 'Indiranagar, Bangalore, Karnataka, India' },
    { name: 'WHITEFIELD GYM', location: 'Whitefield, Bangalore, Karnataka, India' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    const defaultLocation = 'India';
    this.updateMapUrl(defaultLocation);
  }

  updateMapUrl(location: string): void {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  searchByPostcode(): void {
    if (this.searchPostcode.trim()) {
      this.updateMapUrl(this.searchPostcode + ', India');
    }
  }

  useCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.updateMapUrl(`${lat},${lng}`);
        },
        (error) => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported');
    }
  }

  selectGym(gym: Gym): void {
    this.updateMapUrl(gym.location);
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    if (tab === 'INDIA') {
      this.updateMapUrl('India');
    } else if (tab === 'WORLDWIDE') {
      this.updateMapUrl('World');
    }
  }
}
