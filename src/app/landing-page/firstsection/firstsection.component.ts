import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-firstsection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './firstsection.component.html',
  styleUrl: './firstsection.component.scss',
})
export class FirstsectionComponent implements OnInit {
  lang: string = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.lang = selectedLanguage;
    this.translateService.use(selectedLanguage);
  }

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

  getFontSize(lang: string) {
    switch (lang) {
      case 'en':
        return '20px';
      case 'de':
        return '40px';
      default:
        return '20px';
    }
  }
}
