import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPlanShowBillingComponent } from './bill-plan-show-billing.component';

describe('BillPlanShowBillingComponent', () => {
  let component: BillPlanShowBillingComponent;
  let fixture: ComponentFixture<BillPlanShowBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPlanShowBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPlanShowBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
