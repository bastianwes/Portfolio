import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  lang: string = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.lang = selectedLanguage;
    this.translateService.use(selectedLanguage);
  }

  setActive(event: Event) {
    let links = document.querySelectorAll('.right-side a, .dropdown-menu a');

    links.forEach((link) => {
      link.classList.remove('active');
    });

    (event.target as HTMLElement).classList.add('active');
    this.menuOpen = false; // Close menu after clicking
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 650) {
      this.menuOpen = false;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  getFontClass() {
    return this.lang === 'de' ? 'font-de' : 'font-en';
  }
}
