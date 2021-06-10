import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAddOnAppsLinkComponent } from './settings-add-on-apps-link.component';

describe('SettingsAddOnAppsLinkComponent', () => {
  let component: SettingsAddOnAppsLinkComponent;
  let fixture: ComponentFixture<SettingsAddOnAppsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAddOnAppsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAddOnAppsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
