import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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
