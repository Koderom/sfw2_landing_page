import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  @Output() chatToggle = new EventEmitter<void>();

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onChatToggle() {
    this.chatToggle.emit();
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }
}