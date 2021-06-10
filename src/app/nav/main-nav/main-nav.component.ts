import { AuthService } from 'src/app/auth/services/auth.service';
import { UserAccountService } from './../../services/user-account.service';
import { environment } from './../../../environments/environment';
import { AppConfig } from './../../appConfig';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavUpdateService } from 'src/app/services/common/nav-update.service';
import { Observable, Subscription } from 'rxjs';
import { NavItemUpdateService } from 'src/app/services/common/nav-item-update.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav;
  darkModeIsOn: boolean;
  env = environment;

  LoginStatus$: Observable<boolean>;
  loginStatus;
  UserName$: Observable<string>;
  subscriptionNavItemUpdateService: Subscription;

  constructor(private _navUpdateService: NavUpdateService, private _userAccount: UserAccountService,
    private _navItemUpdateService: NavItemUpdateService, private _authService: AuthService) { }
  schoolName = '';
  userName = '';
  ngOnInit(): void {


    this.darkModeIsOn = JSON.parse(localStorage.getItem(AppConfig.darkMode));

    this.LoginStatus$ = this._userAccount.isLoggesIn;

    this.UserName$ = this._userAccount.currentUserName;
    this.updateUIInfo();

    this.subscriptionNavItemUpdateService = this._navItemUpdateService.getMessage().subscribe(
      res => {

        if (res === 'login') {
          this.loginStatus = true;
          this.updateUIInfo();
        }
      }
    );
    this.checkUseLogin();

  }
  ngOnDestroy(): void {
    this.subscriptionNavItemUpdateService.unsubscribe();
  }
  updateUIInfo(): void {
    this.schoolName = this._authService.getCurrentInstName();
    this.userName = this._authService.getUserName();
  }
  checkUseLogin(): void {
    const token = localStorage.getItem(AppConfig.TOKEN);
    if (token) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }

  }
  dackModeCheck(val): void {
    this._navUpdateService.sendMessage(val);

  }
  onLogout(): void {
    this._userAccount.logout();
    this.loginStatus = false;
  }
  closeMenuNowNavMenu(): void {
    // this.drawer.close();
  }
}
