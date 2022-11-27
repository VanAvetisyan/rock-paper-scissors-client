import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        let user: User = {
          userId: result.user?.uid,
          userName: result.user?.displayName,
          userImage: result.user?.photoURL,
        };
        this.setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  SignOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['game']);
      window.location.reload();
    });
  }

  isLoggedIn(): boolean {
    const user: User = this.getUser();
    return user !== null && user.userId !== null ? true : false;
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
