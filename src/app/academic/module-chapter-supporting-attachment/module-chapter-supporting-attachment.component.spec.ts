import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleChapterSupportingAttachmentComponent } from './module-chapter-supporting-attachment.component';

describe('ModuleChapterSupportingAttachmentComponent', () => {
  let component: ModuleChapterSupportingAttachmentComponent;
  let fixture: ComponentFixture<ModuleChapterSupportingAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleChapterSupportingAttachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleChapterSupportingAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
