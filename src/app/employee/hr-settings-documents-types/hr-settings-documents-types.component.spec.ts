import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSettingsDocumentsTypesComponent } from './hr-settings-documents-types.component';

describe('HrSettingsDocumentsTypesComponent', () => {
  let component: HrSettingsDocumentsTypesComponent;
  let fixture: ComponentFixture<HrSettingsDocumentsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSettingsDocumentsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSettingsDocumentsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
