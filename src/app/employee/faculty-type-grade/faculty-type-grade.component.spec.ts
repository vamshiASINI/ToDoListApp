import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTypeGradeComponent } from './faculty-type-grade.component';

describe('FacultyTypeGradeComponent', () => {
  let component: FacultyTypeGradeComponent;
  let fixture: ComponentFixture<FacultyTypeGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTypeGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTypeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
