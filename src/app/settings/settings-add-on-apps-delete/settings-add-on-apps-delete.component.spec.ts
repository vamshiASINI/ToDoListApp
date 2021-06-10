import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAddOnAppsDeleteComponent } from './settings-add-on-apps-delete.component';

describe('SettingsAddOnAppsDeleteComponent', () => {
  let component: SettingsAddOnAppsDeleteComponent;
  let fixture: ComponentFixture<SettingsAddOnAppsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAddOnAppsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAddOnAppsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
