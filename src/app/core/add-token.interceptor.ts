import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreAuthService } from './core-auth.service';

@Injectable()
export class AddTokenrInterceptor implements HttpInterceptor {

  constructor(public authService: CoreAuthService) { }
  bearerToken = '';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(`AddTokenrInterceptor - ${req.url}`);
    this.bearerToken = 'Bearer ' + this.authService.getJwtToken();
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {
        'Authorization': this.bearerToken,
      }
    });

    return next.handle(jsonReq);
  }

}
