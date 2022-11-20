import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsHandViewComponent } from './rps-hand-view.component';

describe('RpsHandViewComponent', () => {
  let component: RpsHandViewComponent;
  let fixture: ComponentFixture<RpsHandViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RpsHandViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpsHandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
