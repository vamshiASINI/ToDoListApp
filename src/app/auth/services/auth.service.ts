import { ResUser } from './../../models/resUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Tokens } from 'src/app/models/tokens';
import { AppConfig } from '../../appConfig';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiUrlV1}login/`;
  constructor(private http: HttpClient) { }

  userLoginServer(user) {
    this.http.post<any>(this.loginUrl, user);
  }

  userLoginServerToken(user): Observable<Tokens> {
    return this.http.post<Tokens>(this.loginUrl, user);
  }


  updateOnUserOnboardingDone(): void {
    const userInfo: ResUser = JSON.parse(localStorage.getItem(AppConfig.user));
    userInfo.onbording = false;
    localStorage.setItem(AppConfig.user, JSON.stringify(userInfo));
  }
  isUserOnboarding(): boolean {
    const userInfo: ResUser = JSON.parse(localStorage.getItem(AppConfig.user));
    if (userInfo.onbording) {
      const valIs = userInfo.designation_id;
      // 1 is superadmin
      // -1 for key not found
      if (valIs.indexOf(1) !== -1) {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
  getUserName(): string {
    const userInfo: ResUser = JSON.parse(localStorage.getItem(AppConfig.user));
    if (userInfo) {
      return userInfo.name;
    } else {
      return '';
    }
  }
  getUserCurrency(): string {
    const userInfo: ResUser = JSON.parse(localStorage.getItem(AppConfig.user));
    return userInfo.currency;
  }
  getCurrentInstCurrency(): string {
    const inst: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    return inst.currency;
  }
  getCurrentInstName(): string {

    const inst: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    if (inst) {
      return inst.name;
    } else {
      return '';
    }

  }

  getCurrentInstId(): number {
    const inst: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    return inst.id;
  }
  getCurrentInstCountryID(): number {
    const inst: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));

    if (inst) {
      return inst.country_id;
    } else {
      return 0;
    }
  }

  getInstituteDetails() {
    const inst: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    return inst;
  }


  getUserUUID(): string {
    const userInfo: ResUser = JSON.parse(localStorage.getItem(AppConfig.user));
    return userInfo.uuid;
  }

  loadDataNowFromLocalForCustomLable(): InstitutionModel {
    const userInfo: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    if (userInfo) {
      return userInfo;
    } else {
      return null;
    }
  }
}
