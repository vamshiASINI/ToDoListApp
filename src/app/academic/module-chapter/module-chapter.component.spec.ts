import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleChapterComponent } from './module-chapter.component';

describe('ModuleChapterComponent', () => {
  let component: ModuleChapterComponent;
  let fixture: ComponentFixture<ModuleChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
