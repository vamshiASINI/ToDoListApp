import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPlanShowComponent } from './bill-plan-show.component';

describe('BillPlanShowComponent', () => {
  let component: BillPlanShowComponent;
  let fixture: ComponentFixture<BillPlanShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPlanShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPlanShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
