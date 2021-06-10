import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSkillsSupportingAttachmentComponent } from './topics-skills-supporting-attachment.component';

describe('TopicsSkillsSupportingAttachmentComponent', () => {
  let component: TopicsSkillsSupportingAttachmentComponent;
  let fixture: ComponentFixture<TopicsSkillsSupportingAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsSkillsSupportingAttachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsSkillsSupportingAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
