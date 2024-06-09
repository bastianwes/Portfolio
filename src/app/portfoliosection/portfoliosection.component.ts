import { Component } from '@angular/core';

@Component({
  selector: 'app-portfoliosection',
  standalone: true,
  imports: [],
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
}
