import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCustomFieldComponent } from './student-custom-field.component';

describe('StudentCustomFieldComponent', () => {
  let component: StudentCustomFieldComponent;
  let fixture: ComponentFixture<StudentCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCustomFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
