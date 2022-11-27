import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  user: any;
  isLoggedIn: boolean = false;

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
}
