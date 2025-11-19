// footer.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Replace this with your actual logo path
  // Option 1: Logo in assets folder
  logoUrl: string = 'assets/images/logo.png';
  
  // Option 2: External URL
  // logoUrl: string = 'https://your-domain.com/logo.png';

  constructor() { }
}