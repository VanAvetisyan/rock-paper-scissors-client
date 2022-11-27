import { TestBed } from '@angular/core/testing';
import { GameRestService } from './game-rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserpickRequestMapperService } from '../mapper/userpick-request-mapper.service';
import { AuthService } from 'src/app/shared/authentication/auth/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UserpickResponse } from '../model/userpick-response';

describe('GameRestService', () => {
  const userIdExpected = 'user1234';
  const userPickExpected = 'rock';
  const enemyPickExpected = 'scissors';
  const userWinsExpected = true;
  const enemyWinsExpected = false;

  let service: GameRestService;
  let mapper: UserpickRequestMapperService;
  let auth: AuthService;
  let fireAuth: AngularFireAuth;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
      ],
      providers: [GameRestService],
    });
    service = TestBed.inject(GameRestService);
    mapper = TestBed.inject(UserpickRequestMapperService);
    auth = TestBed.inject(AuthService);
    fireAuth = TestBed.inject(AngularFireAuth);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response when all request parameters given', () => {
    // given
    const expectedRequest = mapper.map(userPickExpected);
    const expectedResult: UserpickResponse = {
      userId: userIdExpected,
      userPick: userPickExpected,
      enemyPick: enemyPickExpected,
      userWins: userWinsExpected,
      enemyWins: enemyWinsExpected,
    };

    // when
    service.userPicked(userPickExpected).subscribe((result: UserpickResponse) => {
      // then
      expect(result).toBeTruthy();
      expect(result.userWins).toBeTrue();
      expect(result.enemyWins).toBeFalse();
      expect(result.userPick).toBe(userPickExpected);
      expect(result.enemyPick).toBe(enemyPickExpected);
    });
    whenPost(GameRestService.USER_PICK_URL)
      .expectRequest(expectedRequest)
      .respondWith(expectedResult);
  });

  function whenPost(url: string): any {
    return {
      expectRequest(data: any): any {
        return {
          respondWith(response: any): void {
            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(data);
            req.flush(response);
            httpTestingController.verify();
          },
        };
      },
    };
  }
});
