import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillComponent } from './myskill/myskill.component';
import { PortfoliosectionComponent } from './portfoliosection/portfoliosection.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    FirstsectionComponent,
    AboutmeComponent,
    MyskillComponent,
    PortfoliosectionComponent,
    ContactformComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
