// franchise-support.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchise-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './franchise-support.component.html',
  styleUrls: ['./franchise-support.component.css']
})
export class FranchiseSupportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }

  /**
   * Navigate to request information page
   */
  onRequestInfo(): void {
    console.log('Navigating to Request Information Pack page');
    // TODO: Implement navigation to request info page
    // this.router.navigate(['/request-info']);
    
    // Temporary alert for demo
    alert('Redirecting to Request Information Pack page...');
  }

  /**
   * Navigate to book discovery call page
   */
  onBookCall(): void {
    console.log('Navigating to Book Discovery Call page');
    // TODO: Implement navigation to book call page
    // this.router.navigate(['/book-call']);
    
    // Temporary alert for demo
    alert('Redirecting to Book Discovery Call page...');
  }

  /**
   * Scroll smoothly to top of page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}