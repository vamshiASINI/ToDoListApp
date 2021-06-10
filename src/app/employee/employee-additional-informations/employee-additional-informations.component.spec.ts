import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdditionalInformationsComponent } from './employee-additional-informations.component';

describe('EmployeeAdditionalInformationsComponent', () => {
  let component: EmployeeAdditionalInformationsComponent;
  let fixture: ComponentFixture<EmployeeAdditionalInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAdditionalInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAdditionalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
