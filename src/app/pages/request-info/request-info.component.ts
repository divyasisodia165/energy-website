/// request-info.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent implements OnInit {
  franchiseForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder) {
    this.franchiseForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fundingLevel: ['', [Validators.required]],
      city: [''],
      territory: ['']
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.franchiseForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.franchiseForm.controls).forEach(key => {
        this.franchiseForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    // Prepare form data
    const formData = {
      ...this.franchiseForm.value,
      submittedAt: new Date().toISOString()
    };

    // Simulate API call
    console.log('Franchise Request Form Data:', formData);

    // Simulate API delay
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Thank you for your interest! We will contact you soon with the franchise information pack.');
      this.franchiseForm.reset();
    }, 2000);

    // TODO: Replace with actual API call
    // this.franchiseService.submitRequest(formData).subscribe(
    //   response => {
    //     this.isSubmitting = false;
    //     alert('Thank you! We will contact you soon.');
    //     this.franchiseForm.reset();
    //   },
    //   error => {
    //     this.isSubmitting = false;
    //     alert('Error submitting form. Please try again.');
    //   }
    // );
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}