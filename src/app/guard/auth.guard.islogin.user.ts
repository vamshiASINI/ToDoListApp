import { CoreAuthService } from './../core/core-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardIsLoginUser implements CanActivate {

  constructor(private authService: CoreAuthService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.authService.isLoggedIn();
  }
}
