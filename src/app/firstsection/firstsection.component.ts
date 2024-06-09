import { Component } from '@angular/core';

@Component({
  selector: 'app-firstsection',
  standalone: true,
  imports: [],
  templateUrl: './firstsection.component.html',
  styleUrl: './firstsection.component.scss',
})
export class FirstsectionComponent {
  handleClick() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getToContact() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openGithub() {
    window.open('https://github.com/bastianwes?tab=repositories/', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/bastian-weschasit-956a08312/',
      '_blank'
    );
  }
}
