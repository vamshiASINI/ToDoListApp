import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillLicensesComponent } from './bill-licenses.component';

describe('BillLicensesComponent', () => {
  let component: BillLicensesComponent;
  let fixture: ComponentFixture<BillLicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillLicensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
