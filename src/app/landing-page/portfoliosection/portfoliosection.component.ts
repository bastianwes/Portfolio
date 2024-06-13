import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfoliosection',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfoliosection.component.html',
  styleUrl: './portfoliosection.component.scss',
})
export class PortfoliosectionComponent {
  openGame() {
    window.open('https://el-pollo-loco.bastian-weschasit.de/', '_blank');
  }

  openPokedex() {
    window.open('https://pokedex.bastian-weschasit.de/', '_blank');
  }

  openGitHubGame() {
    window.open('https://github.com/bastianwes/El-Pollo-Loco-/', '_blank');
  }

  openGitHubPokedex() {
    window.open('https://github.com/bastianwes/pokedex/', '_blank');
  }

  openGitHubJoin() {
    window.open('https://github.com/bastianwes/Join/', '_blank');
  }
}
