import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNotificationsComponent } from './bill-notifications.component';

describe('BillNotificationsComponent', () => {
  let component: BillNotificationsComponent;
  let fixture: ComponentFixture<BillNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
