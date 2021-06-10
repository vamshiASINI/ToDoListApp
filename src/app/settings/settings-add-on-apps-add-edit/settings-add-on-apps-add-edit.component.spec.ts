import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAddOnAppsAddEditComponent } from './settings-add-on-apps-add-edit.component';

describe('SettingsAddOnAppsAddEditComponent', () => {
  let component: SettingsAddOnAppsAddEditComponent;
  let fixture: ComponentFixture<SettingsAddOnAppsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAddOnAppsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAddOnAppsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
