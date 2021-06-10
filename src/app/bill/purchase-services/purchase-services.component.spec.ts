import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseServicesComponent } from './purchase-services.component';

describe('PurchaseServicesComponent', () => {
  let component: PurchaseServicesComponent;
  let fixture: ComponentFixture<PurchaseServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
