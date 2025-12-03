import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-landing',
  imports: [FormsModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent {
  // Personal Details
  public contactEmail: string = 'hemanthshetty346@gmail.com';

  // Navbar State
  public menuOpen: boolean = false;

  // Contact Form State
  public formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  public formSubmitted: boolean = false;

  constructor() { }

  /**
   * Toggles the mobile navigation menu open/closed state.
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closes the mobile menu, typically called after a link is clicked.
   */
  closeMenu(): void {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  /**
   * Handles the submission of the contact form.
   * In a real application, this would involve sending data to a backend API.
   */
  submitForm(): void {
    // Basic form validation (for demonstration)
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      console.log('--- Form Submission Data (Hardcore Log) ---');
      console.log('Sender Name:', this.formData.name);
      console.log('Sender Email:', this.formData.email);
      console.log('Subject:', this.formData.subject);
      console.log('Message Length:', this.formData.message.length);
      console.log('Target Email (Hemanth):', this.contactEmail);
      console.log('-------------------------------------------');

      // Simulate API call success
      this.formSubmitted = true;
      
      // Clear the form data after submission
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);

    } else {
      alert('Error: Please fill out all required fields.');
    }
  }
}