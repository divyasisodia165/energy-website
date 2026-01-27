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
    { lat: 19.0760, lng: 72.8777, count: 35, address: 'Mumbai, India' },
    { lat: 22.7196, lng: 75.8577, count: 20, address: 'Indore, India' }
  ];

  indiaGyms: Gym[] = [
    { name: 'MUMBAI GYM', location: 'Mumbai, Maharashtra, India' },
    { name: 'INDORE GYM', location: 'Indore, Madhya Pradesh, India' }
  ];

  worldwideGyms: Gym[] = [
    { name: 'BALBRIGGAN GYM', location: 'Balbriggan, Ireland' },
    { name: 'BALLINCOLLIG GYM', location: 'Ballincollig, Cork, Ireland' },
    { name: 'CARLOW GYM', location: 'Carlow, Ireland' },
    { name: 'CITYWEST GYM', location: 'Citywest, Dublin, Ireland' },
    { name: 'CLAREHALL GYM', location: 'Clarehall, Dublin, Ireland' },
    { name: 'DROGHEDA GYM', location: 'Drogheda, Louth, Ireland' },
    { name: 'DUBLIN 8 GYM', location: 'Dublin 8, Ireland' },
    { name: 'DUN LAOGHAIRE GYM', location: 'Dun Laoghaire, Dublin, Ireland' },
    { name: 'DUNDALK GYM', location: 'Dundalk, Louth, Ireland' },
    { name: 'GALWAY GYM', location: 'Galway, Ireland' },
    { name: 'LIMERICK GYM', location: 'Limerick, Ireland' },
    { name: 'MIDLETON GYM', location: 'Midleton, Cork, Ireland' },
    { name: 'MULLINGAR GYM', location: 'Mullingar, Westmeath, Ireland' },
    { name: 'SALTHILL GYM', location: 'Salthill, Galway, Ireland' },
    { name: 'STEPASIDE GYM', location: 'Stepaside, Dublin, Ireland' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.updateMapUrl('India');
  }

  updateMapUrl(location: string): void {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  searchByPostcode(): void {
    if (this.searchPostcode.trim()) {
      this.updateMapUrl(this.searchPostcode);
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
        () => {
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
      this.updateMapUrl('Ireland');
    }
  }
}
