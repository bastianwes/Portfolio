import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  setActive(event: Event) {
    let links = document.querySelectorAll('.right-side a');

    links.forEach((link) => {
      link.classList.remove('active');
    });

    (event.target as HTMLElement).classList.add('active');
  }
}
