import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = environment.apiUrlV1;

  employeeEdit = new Subject<any>();
  formSubmit = new Subject<any>();
  studentEdit = new Subject<any>();

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.addQueryParam(this.baseUrl + url)}`);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${this.addQueryParam(this.baseUrl + url)}`, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(`${this.addQueryParam(this.baseUrl + url)}`, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.addQueryParam(this.baseUrl + url)}`);
  }



  private addQueryParam(url, extraParam = '') {
    return url.indexOf('?') !== -1 ? url + `&${extraParam}` : url + `?${extraParam}`;
  }
}
