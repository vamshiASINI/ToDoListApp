import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSectionElectiveGroupComponent } from './batch-section-elective-group.component';

describe('BatchSectionElectiveGroupComponent', () => {
  let component: BatchSectionElectiveGroupComponent;
  let fixture: ComponentFixture<BatchSectionElectiveGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchSectionElectiveGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSectionElectiveGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
