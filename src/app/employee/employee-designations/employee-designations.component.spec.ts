import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDesignationsComponent } from './employee-designations.component';

describe('EmployeeDesignationsComponent', () => {
  let component: EmployeeDesignationsComponent;
  let fixture: ComponentFixture<EmployeeDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
