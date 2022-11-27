import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RpsButtonPickGroupComponent } from './rps-button-pick-group.component';

describe('RpsButtonPickGroupComponent', () => {
  let component: RpsButtonPickGroupComponent;
  let fixture: ComponentFixture<RpsButtonPickGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [RpsButtonPickGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpsButtonPickGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
