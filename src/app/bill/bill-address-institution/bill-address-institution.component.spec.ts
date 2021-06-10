import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillAddressInstitutionComponent } from './bill-address-institution.component';

describe('BillAddressInstitutionComponent', () => {
  let component: BillAddressInstitutionComponent;
  let fixture: ComponentFixture<BillAddressInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillAddressInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillAddressInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
