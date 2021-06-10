import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCategorysComponent } from './employee-categorys.component';

describe('EmployeeCategorysComponent', () => {
  let component: EmployeeCategorysComponent;
  let fixture: ComponentFixture<EmployeeCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCategorysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
