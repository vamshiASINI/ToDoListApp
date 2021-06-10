import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { SettingsCustomLabelsComponent } from './settings-custom-labels/settings-custom-labels.component';
import { SettingsAddOnAppsLinkComponent } from './settings-add-on-apps-link/settings-add-on-apps-link.component';
import { SettingsAddOnAppsAddEditComponent } from './settings-add-on-apps-add-edit/settings-add-on-apps-add-edit.component';
import { SettingsAddOnAppsDeleteComponent } from './settings-add-on-apps-delete/settings-add-on-apps-delete.component';


@NgModule({
  declarations: [GeneralSettingsComponent, SettingsCustomLabelsComponent, SettingsAddOnAppsLinkComponent, SettingsAddOnAppsAddEditComponent, SettingsAddOnAppsDeleteComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SettingsModule { }
