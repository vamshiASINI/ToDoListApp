import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGradeClassComponent } from './course-grade-class.component';

describe('CourseGradeClassComponent', () => {
  let component: CourseGradeClassComponent;
  let fixture: ComponentFixture<CourseGradeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGradeClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGradeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
