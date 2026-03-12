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

  visibleGyms: Gym[] = [];
itemsToShow = 10;
currentIndex = 0;
  
  gymLocations = [
    { lat: 19.0760, lng: 72.8777, count: 35, address: 'Mumbai, India' },
    { lat: 22.7196, lng: 75.8577, count: 20, address: 'Indore, India' }
  ];

  indiaGyms: Gym[] = [
    { name: 'MUMBAI GYM', location: 'Mumbai, Maharashtra, India' },
    { name: 'INDORE GYM', location: 'Indore, Madhya Pradesh, India' }
  ];

  worldwideGyms: Gym[] = [
{ name: 'ENERGIE FITNESS OLD STREET', location: 'London, UK' },
{ name: 'ENERGIE FITNESS HIGHBURY & ISLINGTON', location: 'London, UK' },
{ name: 'ENERGIE FITNESS ARCHWAY', location: 'London, UK' },
{ name: 'ENERGIE FITNESS KILBURN', location: 'London, UK' },
{ name: 'ENERGIE FITNESS CRICKLEWOOD', location: 'London, UK' },
{ name: 'ENERGIE FITNESS HOMERTON', location: 'London, UK' },
{ name: 'ENERGIE FITNESS BETHNAL GREEN', location: 'London, UK' },
{ name: 'ENERGIE FITNESS BOROUGH', location: 'London, UK' },
{ name: 'ENERGIE FITNESS BATTERSEA', location: 'London, UK' },
{ name: 'ENERGIE FITNESS PUTNEY', location: 'London, UK' },
{ name: 'ENERGIE FITNESS PALMERS GREEN', location: 'London, UK' },
{ name: 'ENERGIE FITNESS CHINGFORD', location: 'London, UK' },
{ name: 'ENERGIE FITNESS TOOTING', location: 'London, UK' },
{ name: 'ENERGIE FITNESS THORNTON HEATH', location: 'London, UK' },
{ name: 'ENERGIE FITNESS ACTON', location: 'London, UK' },
{ name: 'ENERGIE FITNESS ELTHAM', location: 'London, UK' },
{ name: 'ENERGIE FITNESS ERITH', location: 'London, UK' },
{ name: 'ENERGIE FITNESS BRENTFORD', location: 'Brentford, UK' },
{ name: 'ENERGIE FITNESS HAYES', location: 'Hayes, UK' },
{ name: 'ENERGIE FITNESS HAMPTON HILL', location: 'Hampton Hill, UK' },
{ name: 'ENERGIE FITNESS WOKINGHAM', location: 'Wokingham, UK' },
{ name: 'ENERGIE FITNESS WINCHESTER', location: 'Winchester, UK' },
{ name: 'ENERGIE FITNESS TUNBRIDGE WELLS', location: 'Kent, UK' },
{ name: 'ENERGIE FITNESS CANTERBURY', location: 'Canterbury, UK' },
{ name: 'ENERGIE FITNESS BOGNOR REGIS', location: 'Bognor Regis, UK' },
{ name: 'ENERGIE FITNESS CRAWLEY', location: 'Crawley, UK' },
{ name: 'ENERGIE FITNESS EAST GRINSTEAD', location: 'East Grinstead, UK' },
{ name: 'ENERGIE FITNESS BRIGHTON', location: 'Brighton, UK' },
{ name: 'ENERGIE FITNESS SANDHURST', location: 'Sandhurst, UK' },
{ name: 'ENERGIE FITNESS ASHFORD', location: 'Surrey, UK' },
{ name: 'ENERGIE FITNESS BEDFORD', location: 'Bedford, UK' },
{ name: 'ENERGIE FITNESS IPSWICH', location: 'Ipswich, UK' },
{ name: 'ENERGIE FITNESS CHELMSFORD', location: 'Chelmsford, UK' },
{ name: 'ENERGIE FITNESS COLCHESTER', location: 'Colchester, UK' },
{ name: 'ENERGIE FITNESS HODDESDON', location: 'Hoddesdon, UK' },
{ name: 'ENERGIE FITNESS LETCHWORTH', location: 'Letchworth Garden City, UK' },
{ name: 'ENERGIE FITNESS LEIGHTON BUZZARD', location: 'Leighton Buzzard, UK' },
{ name: 'ENERGIE FITNESS LINCOLN CITY', location: 'Lincoln, UK' },
{ name: 'ENERGIE FITNESS LINCOLN FLAVIAN RD', location: 'Lincoln, UK' },
{ name: 'ENERGIE FITNESS KETTERING', location: 'Kettering, UK' },
{ name: 'ENERGIE FITNESS HYDE', location: 'Stockport, UK' },
{ name: 'ENERGIE FITNESS WARRINGTON', location: 'Warrington, UK' },
{ name: 'ENERGIE FITNESS TUNSTALL', location: 'Stoke-on-Trent, UK' },
{ name: 'ENERGIE FITNESS SCUNTHORPE', location: 'Scunthorpe, UK' },
{ name: 'ENERGIE FITNESS WOLVERHAMPTON', location: 'Wolverhampton, UK' },
{ name: 'ENERGIE FITNESS CHELMSLEY WOOD', location: 'Birmingham, UK' },
{ name: 'ENERGIE FITNESS CHELTENHAM', location: 'Cheltenham, UK' },
{ name: 'ENERGIE FITNESS BROOKLANDS', location: 'Milton Keynes, UK' },
{ name: 'ENERGIE FITNESS INVERURIE', location: 'Inverurie, UK' },
{ name: 'ENERGIE FITNESS CAMBUSLANG', location: 'Glasgow, UK' },
{ name: 'ENERGIE FITNESS DUMBARTON', location: 'Dumbarton, UK' },
{ name: 'ENERGIE FITNESS GLASGOW SOUTH', location: 'Glasgow, UK' },
{ name: 'ENERGIE FITNESS CARDIFF', location: 'Cardiff, UK' },
{ name: 'ENERGIE FITNESS BRIDGEND', location: 'Bridgend, UK' },
{ name: 'ENERGIE FITNESS PONTYPRIDD', location: 'Pontypridd, UK' },
{ name: 'ENERGIE FITNESS DEESIDE', location: 'Chester, UK' },
{ name: 'ENERGIE FITNESS DRIMNAGH', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS DUN LAOGHAIRE', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS BALBRIGGAN', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS CITYWEST', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS CLAREHALL', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS DUBLIN 8', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS STEPASIDE', location: 'Dublin, Ireland' },
{ name: 'ENERGIE FITNESS GALWAY', location: 'Galway, Ireland' },
{ name: 'ENERGIE FITNESS LIMERICK', location: 'Limerick, Ireland' },
{ name: 'ENERGIE FITNESS MULLINGAR', location: 'Mullingar, Ireland' },
{ name: 'ENERGIE FITNESS DUNDALK', location: 'Dundalk, Ireland' },
{ name: 'ENERGIE FITNESS DROGHEDA', location: 'Louth, Ireland' },
{ name: 'ENERGIE FITNESS BALLINCOLLIG', location: 'Cork, Ireland' },
{ name: 'ENERGIE FITNESS MIDLETON', location: 'Cork, Ireland' },
{ name: 'ENERGIE FITNESS CARLOW', location: 'Carlow, Ireland' }
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
