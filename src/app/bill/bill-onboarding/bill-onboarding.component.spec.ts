import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOnboardingComponent } from './bill-onboarding.component';

describe('BillOnboardingComponent', () => {
  let component: BillOnboardingComponent;
  let fixture: ComponentFixture<BillOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
