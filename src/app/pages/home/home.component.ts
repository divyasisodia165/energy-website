import { Component, OnInit, OnDestroy } from '@angular/core';
import { FindGymComponent } from '../find-gym/find-gym.component';


interface Review {
  title: string;
  text: string;
  author: string;
  time: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FindGymComponent],   // ⭐ ADD THIS
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 

export class HomeComponent implements OnInit, OnDestroy {
  private scrollListener: any;
  
  // Review carousel state
  currentReviewIndex: number = 0;
  reviewsCount: string = '17,835';
  
  // Reviews data
  reviews: Review[] = [
    {
      title: 'Amazing Hyrox training',
      text: 'I have been a member here for about 4 years now and in this time I have always enjoyed my visits. The gym is well equipped, clean and the staff are friendly and helpful.',
      author: 'sarra',
      time: '12 hours ago',
      rating: 5
    },
    {
      title: 'Best gym near me',
      text: 'I joined at this gym in September. I absolutely love it as I found big gyms too intimidating. The staff are so welcoming and helpful. The classes are great fun.',
      author: 'Nikky G',
      time: '16 hours ago',
      rating: 5
    },
    {
      title: 'Knowledgeable gym staff',
      text: 'I\'ve been at the gym since it started but recently I needed to use the PT staff. They were brilliant, supportive and very knowledgeable. Would highly recommend.',
      author: 'Shelley Millar',
      time: '5 days ago',
      rating: 5
    },
    {
      title: 'Great value for money',
      text: 'Excellent facilities at an affordable price. The equipment is top-notch and there\'s everything you need for a complete workout. Staff are always available to help.',
      author: 'James Mitchell',
      time: '1 week ago',
      rating: 5
    },
    {
      title: 'Friendly community atmosphere',
      text: 'What sets this gym apart is the community. Everyone is supportive and motivating. The trainers really care about your progress and the classes are diverse and challenging.',
      author: 'Emma Roberts',
      time: '1 week ago',
      rating: 5
    },
    {
      title: 'Clean and well-maintained',
      text: 'The gym is always spotlessly clean and equipment is well-maintained. I\'ve tried many gyms and this is by far the best in terms of cleanliness and hygiene standards.',
      author: 'David Thompson',
      time: '2 weeks ago',
      rating: 5
    },
    {
      title: 'Excellent personal training',
      text: 'The personal trainers here are exceptional. They create tailored programs and really push you to achieve your goals while keeping it fun and engaging.',
      author: 'Sarah Williams',
      time: '2 weeks ago',
      rating: 5
    },
    {
      title: 'Perfect for beginners',
      text: 'As someone new to fitness, I was nervous about joining a gym. The staff made me feel so welcome and helped me build confidence. Zero intimidation, just support.',
      author: 'Michael Brown',
      time: '3 weeks ago',
      rating: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Smooth scroll behavior
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
    
    // Initialize animations
    this.initializeAnimations();
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  /**
   * Handle scroll events for animations and effects
   */
  private handleScroll(): void {
    // Fade in elements on scroll
    this.animateOnScroll();
  }

  /**
   * Animate elements when they come into view
   */
  private animateOnScroll(): void {
    const elements = document.querySelectorAll('.feature-card, .offer-card, .value-image-container, .review-card');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  }

  /**
   * Initialize page animations
   */
  private initializeAnimations(): void {
    // Animate hero content on load
    setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.classList.add('animate-in');
      }
    }, 100);
  }

  /**
   * Navigate to previous set of reviews
   */
  previousReviews(): void {
    if (this.currentReviewIndex > 0) {
      this.currentReviewIndex--;
    }
  }

  /**
   * Navigate to next set of reviews
   */
  nextReviews(): void {
    if (this.currentReviewIndex < this.reviews.length - 3) {
      this.currentReviewIndex++;
    }
  }

  /**
   * Scroll to section smoothly
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Handle Join Now button click
   */
  onJoinNow(): void {
    // Navigate to join page or open modal
    console.log('Join Now clicked');
    // Example: this.router.navigate(['/join']);
    // Or open a modal/dialog for membership signup
  }

  /**
   * Handle Find Gym button click
   */
  onFindGym(): void {
    // Navigate to gym finder page
    console.log('Find Gym clicked');
    // Example: this.router.navigate(['/find-gym']);
    // Or scroll to gym locations section
  }

  /**
   * Handle Learn More button clicks for different offers
   */
  onLearnMore(category: string): void {
    // Navigate to specific offer page or section
    console.log(`Learn more about: ${category}`);
    // Example: this.router.navigate(['/offers', category]);
    
    // You can implement different actions based on category
    switch(category) {
      case 'digital-fitness':
        // Navigate to digital fitness platform page
        break;
      case 'personal-training':
        // Open personal training booking
        break;
      case 'classes':
        // Show class timetable
        break;
      case 'yard':
        // Show The Yard information
        break;
      case 'blog':
        // Navigate to blog
        break;
      case 'spotify':
        // Open Spotify playlist in new tab
        // window.open('https://open.spotify.com/...', '_blank');
        break;
    }
  }

  /**
   * Get visible reviews based on current index
   */
  getVisibleReviews(): Review[] {
    return this.reviews.slice(this.currentReviewIndex, this.currentReviewIndex + 3);
  }

  /**
   * Check if can navigate to previous reviews
   */
  canNavigatePrevious(): boolean {
    return this.currentReviewIndex > 0;
  }

  /**
   * Check if can navigate to next reviews
   */
  canNavigateNext(): boolean {
    return this.currentReviewIndex < this.reviews.length - 3;
  }
}