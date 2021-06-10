import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchSectionService {

  private academicUrl = `${environment.apiUrlV1}academic/`;
  private globalUrl = `${environment.apiUrlV1}institute/`;


  constructor(private http: HttpClient) { }

  // http://t2.binay.local:8000/api/v1/academic/subject/?subject_type_global_id__in=1&is_active=true
  getSubjectNoramlTypeAndActive(): Observable<any> {
    const urlIs = this.academicUrl + 'subject/?subject_type_global_id__in=1&is_active=true';
    return this.http.get<any>(urlIs);
  }

}
