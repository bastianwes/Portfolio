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
}
