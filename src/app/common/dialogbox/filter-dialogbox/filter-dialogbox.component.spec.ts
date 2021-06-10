import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDialogboxComponent } from './filter-dialogbox.component';

describe('FilterDialogboxComponent', () => {
  let component: FilterDialogboxComponent;
  let fixture: ComponentFixture<FilterDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
