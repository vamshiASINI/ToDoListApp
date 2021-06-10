import { SettingsAddOnAppsLinkComponent } from './settings-add-on-apps-link/settings-add-on-apps-link.component';
import { SettingsCustomLabelsComponent } from './settings-custom-labels/settings-custom-labels.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralSettingsComponent
  }, {
    path: 'general-settings',
    component: GeneralSettingsComponent
  },
  {
    path: 'custom-labels',
    component: SettingsCustomLabelsComponent
  }, {
    path: 'add-on-apps',
    component: SettingsAddOnAppsLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
