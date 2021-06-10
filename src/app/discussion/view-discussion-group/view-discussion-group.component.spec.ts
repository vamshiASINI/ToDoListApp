import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiscussionGroupComponent } from './view-discussion-group.component';

describe('ViewDiscussionGroupComponent', () => {
  let component: ViewDiscussionGroupComponent;
  let fixture: ComponentFixture<ViewDiscussionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDiscussionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiscussionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
