import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router, private http: HttpClientModule) { }
  private readonly JWT_TOKEN = 'TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            // console.log(`UnauthorizedInterceptor - ${request.url}`);
            // this.router.navigate(['/login']);
            localStorage.setItem(this.JWT_TOKEN, '');
            localStorage.setItem(this.REFRESH_TOKEN, '');
            this.router.navigate(['/login']);
            return throwError(error);
          } else {
            return throwError(error);
          }
        }
      ));
  }

  private gotoLogin(request: HttpRequest<any>, next: HttpHandler) {
    this.router.navigate(['/login']);
    return next.handle(request);
  }
}
