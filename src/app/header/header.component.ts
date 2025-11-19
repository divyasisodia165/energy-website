// header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule]
})
export class HeaderComponent {

  logoUrl: string = 'assets/images/logo.png';

  exploreOpen: boolean = false;
  mobileMenuOpen: boolean = false;

  toggleExplore(): void {
    this.exploreOpen = !this.exploreOpen;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeAllMenus(): void {
    this.exploreOpen = false;
    this.mobileMenuOpen = false;
  }
}
