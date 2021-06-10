import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveGroupInfoComponent } from './leave-group-info.component';

describe('LeaveGroupInfoComponent', () => {
  let component: LeaveGroupInfoComponent;
  let fixture: ComponentFixture<LeaveGroupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveGroupInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
