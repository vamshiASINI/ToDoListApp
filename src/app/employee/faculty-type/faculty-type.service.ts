import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FacultyTypeResponseModel } from '../models/faculty-type-response-model';

@Injectable({
  providedIn: 'root'
})
export class FacultyTypeService {

  private employeeUrl = environment.apiUrlV1 + 'employee/';

  constructor(private http: HttpClient) { }


  getListFacultyType(limit: number, offset: number): Observable<FacultyTypeResponseModel> {
    const urlIs = this.employeeUrl + 'faculty-type/?limit=' + limit + '&offset=' + offset;
    return this.http.get<FacultyTypeResponseModel>(urlIs);
  }
}
