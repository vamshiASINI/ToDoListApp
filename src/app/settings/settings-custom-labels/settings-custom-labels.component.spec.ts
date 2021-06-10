import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCustomLabelsComponent } from './settings-custom-labels.component';

describe('SettingsCustomLabelsComponent', () => {
  let component: SettingsCustomLabelsComponent;
  let fixture: ComponentFixture<SettingsCustomLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCustomLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCustomLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
