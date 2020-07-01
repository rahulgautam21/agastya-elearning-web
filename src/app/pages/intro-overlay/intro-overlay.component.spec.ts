import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroOverlayComponent } from './intro-overlay.component';

describe('IntroOverlayComponent', () => {
  let component: IntroOverlayComponent;
  let fixture: ComponentFixture<IntroOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
