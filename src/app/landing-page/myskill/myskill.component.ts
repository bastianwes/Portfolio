import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskill',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './myskill.component.html',
  styleUrl: './myskill.component.scss',
})
export class MyskillComponent {
  handleClick() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
