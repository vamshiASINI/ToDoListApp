import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSectionSubjectGroupComponent } from './batch-section-subject-group.component';

describe('BatchSectionSubjectGroupComponent', () => {
  let component: BatchSectionSubjectGroupComponent;
  let fixture: ComponentFixture<BatchSectionSubjectGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchSectionSubjectGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSectionSubjectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
