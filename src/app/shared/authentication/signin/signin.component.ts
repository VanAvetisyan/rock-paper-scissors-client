import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService) {}

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
    /*this.authService.GoogleAuth();
    this.isLoggedIn = this.authService.isLoggedIn();*/
    await this.authService.GoogleAuth().then(() => {
      this.userIsLoggedIn();
    });
  }

  async signOut() {
    /*this.authService.SignOut();
    this.isLoggedIn = this.authService.isLoggedIn();*/
    await this.authService.SignOut().then(() => {
      this.userIsLoggedIn();
    });
  }
}
