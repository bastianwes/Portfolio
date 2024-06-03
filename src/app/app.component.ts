import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillComponent } from './myskill/myskill.component';
import { PortfoliosectionComponent } from './portfoliosection/portfoliosection.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FirstsectionComponent,
    AboutmeComponent,
    MyskillComponent,
    PortfoliosectionComponent,
    ContactformComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
