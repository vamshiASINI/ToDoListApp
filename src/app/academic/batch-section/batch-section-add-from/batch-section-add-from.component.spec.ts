import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSectionAddFromComponent } from './batch-section-add-from.component';

describe('BatchSectionAddFromComponent', () => {
  let component: BatchSectionAddFromComponent;
  let fixture: ComponentFixture<BatchSectionAddFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchSectionAddFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSectionAddFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
