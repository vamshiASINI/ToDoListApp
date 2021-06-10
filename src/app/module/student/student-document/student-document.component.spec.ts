import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocumentComponet } from './student-document.component';

describe('StudentDocumentComponet', () => {
  let component: StudentDocumentComponet;
  let fixture: ComponentFixture<StudentDocumentComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDocumentComponet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDocumentComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
