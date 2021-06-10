import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSkillsComponent } from './topics-skills.component';

describe('TopicsSkillsComponent', () => {
  let component: TopicsSkillsComponent;
  let fixture: ComponentFixture<TopicsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
