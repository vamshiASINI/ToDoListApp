import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.checkUserForOnBoarding();
  }
  checkUserForOnBoarding(): void {
    if (this._authService.isUserOnboarding()) {
      this._router.navigate(['/bill/purchase-services']);
    }
  }

}
