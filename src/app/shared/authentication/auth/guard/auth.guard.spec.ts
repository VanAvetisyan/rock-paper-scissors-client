import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let auth: AuthService;
  let fireAuth: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
      ],
      providers: [AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    auth = TestBed.inject(AuthService);
    fireAuth = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true is there is a logged user', () => {
    // given
    spyOn(auth, 'isLoggedIn').and.returnValue(true);

    // then
    expect(guard.canActivate()).toBeTrue();
  });

  it('should return false is there is not any logged user', () => {
    // given
    spyOn(auth, 'isLoggedIn').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');

    // then
    expect(guard.canActivate()).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledWith(['game']);
  });
});
