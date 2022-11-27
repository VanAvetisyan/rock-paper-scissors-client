import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  user: any;
  isLoggedIn: boolean = false;

  languages: string[] = [];
  selectedLanguage: any = 'en';
  showLanguageSelector: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService
  ) {
    this.languages = ['en', 'es', 'de'];
    this.selectedLanguage = localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'en';
    this.translate.use(this.selectedLanguage);
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.user = this.authService.getUser();
      this.isLoggedIn = true;
    }
  }

  userIsLoggedIn() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.authService.getUser();
    }
  }

  async signIn() {
    await this.authService.GoogleAuth().then(() => {
      this.userIsLoggedIn();
      this.router.navigate(['game']);
      window.location.reload();
    });
  }

  async signOut() {
    await this.authService.SignOut().then(() => {
      this.userIsLoggedIn();
    });
  }

  accessUserProfile() {
    this.router.navigate(['user']);
  }

  languageSelect(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.showLanguages();
  }

  showLanguages() {
    this.showLanguageSelector = !this.showLanguageSelector;
  }
}
