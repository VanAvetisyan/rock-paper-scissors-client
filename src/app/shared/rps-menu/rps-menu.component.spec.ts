import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsMenuComponent } from './rps-menu.component';

describe('RpsMenuComponent', () => {
  let component: RpsMenuComponent;
  let fixture: ComponentFixture<RpsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RpsMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
