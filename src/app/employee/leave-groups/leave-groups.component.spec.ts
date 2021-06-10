import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveGroupsComponent } from './leave-groups.component';

describe('LeaveGroupsComponent', () => {
  let component: LeaveGroupsComponent;
  let fixture: ComponentFixture<LeaveGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
