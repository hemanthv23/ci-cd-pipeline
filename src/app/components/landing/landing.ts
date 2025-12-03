import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  menuOpen = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}