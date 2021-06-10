import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CoreAuthService } from '../core/core-auth.service';
import { environment } from 'src/environments/environment';
//import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogin implements CanActivate {

  constructor(private authService: CoreAuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([environment.homeLandingPage]);
    }
    return !this.authService.isLoggedIn();
  }
}
