import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSettingsCustomFieldsComponent } from './hr-settings-custom-fields.component';

describe('HrSettingsCustomFieldsComponent', () => {
  let component: HrSettingsCustomFieldsComponent;
  let fixture: ComponentFixture<HrSettingsCustomFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSettingsCustomFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSettingsCustomFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
