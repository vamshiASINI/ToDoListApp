import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSectionComponent } from './batch-section.component';

describe('BatchSectionComponent', () => {
  let component: BatchSectionComponent;
  let fixture: ComponentFixture<BatchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
