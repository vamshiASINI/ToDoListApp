import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypePaymentsComponent } from './leave-type-payments.component';

describe('LeaveTypePaymentsComponent', () => {
  let component: LeaveTypePaymentsComponent;
  let fixture: ComponentFixture<LeaveTypePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTypePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
