import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTypeComponent } from './faculty-type.component';

describe('FacultyTypeComponent', () => {
  let component: FacultyTypeComponent;
  let fixture: ComponentFixture<FacultyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
