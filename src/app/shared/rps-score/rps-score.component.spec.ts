import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsScoreComponent } from './rps-score.component';

describe('RpsScoreComponent', () => {
  let component: RpsScoreComponent;
  let fixture: ComponentFixture<RpsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RpsScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
