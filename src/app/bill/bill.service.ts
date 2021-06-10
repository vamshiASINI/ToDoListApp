import { BillPromoCodeModel } from './models/bill-promo-code-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanResponseModel } from './models/plan-response-model';
import { BillAddressInstitution } from './models/bill-address-institution';
import { BillCurrentValidityModel } from './models/bill-current-validity-model';
import { BillCurrentPlanBillListModel } from './models/bill-current-plan-bill-list-model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private loginUrl = `${environment.apiUrlV1}plan/`;
  private instituteUrl = `${environment.apiUrlV1}institute/`;

  constructor(private http: HttpClient) { }

  getAllPlanByUser(): Observable<PlanResponseModel> {
    return this.http.get<PlanResponseModel>(this.loginUrl);
  }
  getPromoCode(promocode, uuid, planId, studentTotal, empTotal): Observable<BillPromoCodeModel> {
    const urlIs = this.loginUrl + 'promo/' + promocode + '/' + uuid + '/' + planId + '/' + studentTotal + '/';
    return this.http.get<BillPromoCodeModel>(urlIs);
  }
  getAllAddress(): Observable<BillAddressInstitution[]> {
    const urlIs = this.instituteUrl + 'address/';
    return this.http.get<BillAddressInstitution[]>(urlIs);
  }
  makeBillOfInstitution(formVal): Observable<any> {
    const urlIs = this.instituteUrl + 'bill/';
    return this.http.post<any>(urlIs, formVal);
  }
  makeTryBillOfInstitution(formVal): Observable<any> {
    const urlIs = this.instituteUrl + 'bill/try/';
    return this.http.post<any>(urlIs, formVal);
  }

  getCurrentBilingInfo(instID): Observable<BillCurrentValidityModel> {
    const urlIs = this.instituteUrl + 'bill/product/' + instID + '/';
    return this.http.get<BillCurrentValidityModel>(urlIs);

  }

  getBilingListInfo(instID): Observable<BillCurrentPlanBillListModel[]> {
    const urlIs = this.instituteUrl + 'bill/list/' + instID + '/';
    return this.http.get<BillCurrentPlanBillListModel[]>(urlIs);

  }
}
