import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  lang: string = '';
  germanIsSelected: boolean = false;

  constructor(
    private translateService: TranslateService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.animationService.applyAnimation();
    this.lang = localStorage.getItem('lang') || 'en';
    this.germanIsSelected = this.lang === 'de';
    this.translateService.use(this.lang);
    this.translateService.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.germanIsSelected = this.lang === 'de';
    });
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.translateService.use(selectedLanguage);
    this.germanIsSelected = selectedLanguage === 'de';
  }
}
