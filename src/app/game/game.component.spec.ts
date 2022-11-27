import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game.component';
import { UserpickResponse } from './model/userpick-response';
import { GameRestService } from './rest/game-rest.service';

describe('GameComponent', () => {
  let response: UserpickResponse = {
    userPick: '',
    enemyPick: '',
    userWins: true,
    enemyWins: false,
  };

  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, SharedModule],
      declarations: [GameComponent],
      providers: [
        {
          provide: GameRestService,
          useValue: {
            userPicked({}): Observable<UserpickResponse> {
              return of(response);
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start game flow when user clicks in any pick button', () => {
    // given
    spyOn(component, 'userPickedChoose');
    // when
    fixture.debugElement.query(By.css('#rock')).nativeElement.click();
    // then
    expect(component.userPickedChoose).toHaveBeenCalledWith('rock');
  });

  it('should change sound value every time user clicks in sound button', () => {
    // given
    spyOn(component, 'soundSwitch');
    // when
    fixture.debugElement.query(By.css('#sound-button')).nativeElement.click();
    // then
    expect(component.soundSwitch).toHaveBeenCalled();
  });

  it('should reset the game every time user clicks reset button', () => {
    // given
    spyOn(component, 'reset');
    // when
    fixture.debugElement.query(By.css('#reset-button')).nativeElement.click();
    // then
    expect(component.reset).toHaveBeenCalled();
  });
});
