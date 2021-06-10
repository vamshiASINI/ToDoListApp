import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResGeneralSettingsModel } from './models/res-general-settings-model';
import { SettingsAddOnAppsLinkModel } from './models/settings-add-on-apps-link-model';
import { SettingsCustomLableModel } from './models/settings-custom-lable-model';


@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private loginUrl = `${environment.apiUrlV1}plan/`;
  private instituteUrl = `${environment.apiUrlV1}institute/`;
  private addOnAppsLink = environment.apiUrlV1 + 'institute/add-on-apps-link/';

  constructor(private http: HttpClient) { }

  getInstitteSetting(instId): Observable<ResGeneralSettingsModel> {
    const urlIs = this.instituteUrl + 'settings/' + instId + '/';
    return this.http.get<ResGeneralSettingsModel>(urlIs);
  }
  updateInstitteSetting(instId, formVal): Observable<ResGeneralSettingsModel> {
    const urlIs = this.instituteUrl + 'settings/' + instId + '/';
    return this.http.put<ResGeneralSettingsModel>(urlIs, formVal);
  }

  getCustomLabels(instId): Observable<SettingsCustomLableModel> {
    const urlIs = this.instituteUrl + 'custom-labels/' + instId + '/';
    return this.http.get<SettingsCustomLableModel>(urlIs);
  }
  updateCustomLabels(instId, formVal): Observable<SettingsCustomLableModel> {
    const urlIs = this.instituteUrl + 'custom-labels/' + instId + '/';
    return this.http.put<SettingsCustomLableModel>(urlIs, formVal);
  }
  addOnAppsLinkList(instId): Observable<SettingsAddOnAppsLinkModel[]> {
    const urlIs = this.addOnAppsLink + instId + '/';
    return this.http.get<SettingsAddOnAppsLinkModel[]>(urlIs);
  }

  addOnAppsLinkAdd(instId, formData): Observable<SettingsAddOnAppsLinkModel> {
    const urlIs = this.addOnAppsLink + instId + '/';
    return this.http.post<SettingsAddOnAppsLinkModel>(urlIs, formData);
  }
  updateAppsLinkAdd(instId, linkId, formData): Observable<SettingsAddOnAppsLinkModel> {
    const urlIs = this.addOnAppsLink + instId + '/' + linkId + '/';
    return this.http.put<SettingsAddOnAppsLinkModel>(urlIs, formData);
  }

  deleteAppsLinkAdd(instId, linkId): Observable<SettingsAddOnAppsLinkModel> {
    const urlIs = this.addOnAppsLink + instId + '/' + linkId + '/';
    return this.http.delete<SettingsAddOnAppsLinkModel>(urlIs);
  }


}
