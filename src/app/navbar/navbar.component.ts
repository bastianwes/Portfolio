import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  menuOpen = false;

  setActive(event: Event) {
    let links = document.querySelectorAll('.right-side a, .dropdown-menu a');

    links.forEach((link) => {
      link.classList.remove('active');
    });

    (event.target as HTMLElement).classList.add('active');
    this.menuOpen = false; // Close menu after clicking
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 650) {
      this.menuOpen = false;
    }
  }

  ngOnDestroy() {
    // Cleanup the event listener when the component is destroyed
    window.removeEventListener('resize', this.onResize);
  }
}
