import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/authentication/auth/auth.service';
import { environment } from 'src/environments/environment';
import { UserpickRequest } from '../model/userpick-request';
import { UserpickRequestMapperService } from './userpick-request-mapper.service';

describe('UserpickRequestMapperService', () => {
  const userIdExpected = 'user1234';
  const userPickExpected = 'rock';

  let mapper: UserpickRequestMapperService;
  let auth: AuthService;
  let fireAuth: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule],
    });
    mapper = TestBed.inject(UserpickRequestMapperService);
    auth = TestBed.inject(AuthService);
    fireAuth = TestBed.inject(AngularFireAuth);

    spyOn(auth, 'getUser').and.returnValue({
      userId: userIdExpected,
      userName: 'Jack & Jones',
      userImage: 'img',
    });

    spyOn(auth, 'isLoggedIn').and.returnValue(true);
  });

  it('should be created', () => {
    expect(mapper).toBeTruthy();
  });

  it('should map entity to request type', () => {
    // given
    let expectedResult: UserpickRequest = {
      userPick: userPickExpected,
      userId: userIdExpected,
    };
    // when
    let result = mapper.map(userPickExpected);
    expect(result).toEqual(expectedResult);
  });
});
