import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/authentication/auth/auth.service';
import { SharedModule } from '../shared/shared.module';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
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
      declarations: [UserProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    auth = TestBed.inject(AuthService);
    fireAuth = TestBed.inject(AngularFireAuth);

    spyOn(auth, 'getUser').and.returnValue({
      userId: 'user123',
      userName: 'Jack & Jones',
      userImage: 'img',
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
