import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsAccountsComponent } from './bills-accounts.component';

describe('BillsAccountsComponent', () => {
  let component: BillsAccountsComponent;
  let fixture: ComponentFixture<BillsAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
