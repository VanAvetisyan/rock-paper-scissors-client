import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared.module';
import { AuthService } from '../auth/auth.service';

import { SignInComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let auth: AuthService;
  let fireAuth: AngularFireAuth;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        TranslateModule.forRoot(),
        SharedModule,
      ],
      declarations: [SignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    auth = TestBed.inject(AuthService);
    fireAuth = TestBed.inject(AngularFireAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
