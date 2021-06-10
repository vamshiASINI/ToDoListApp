import { AppConfig } from './../../appConfig';
import { UserAccountService } from './../../services/user-account.service';
import { Component, OnInit, Input, Renderer2, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { Tokens } from 'src/app/models/tokens';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { config } from 'src/app/config';
import { LoginUser } from 'src/app/models/loginUser';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { NavUpdateService } from 'src/app/services/common/nav-update.service';
import { NavItemUpdateService } from 'src/app/services/common/nav-item-update.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  env = environment;
  errorEmail: string;
  errorPassword: string;
  loader = false;
  /*email = new FormControl('operationsmanager@nomail.com', [Validators.required, Validators.email]);
  password = new FormControl('milestone', [Validators.required]);*/

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  LoginForm = new FormGroup({
    username: this.username,
    password: this.password
  });


  private readonly JWT_TOKEN = 'TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  loginUser: LoginUser;
  constructor(private _userAccount: UserAccountService, private auth: AuthService, private _renderer: Renderer2, @Inject(DOCUMENT) private document: Document,
    private router: Router, private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private commonService: CommonService, private _navUpdateService: NavUpdateService, private _navItemUpdateService: NavItemUpdateService) { }

  ngOnInit() {
    // this._navUpdateService.sendMessage('login');
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this._renderer.addClass(this.document.body, "loginPage")
    this._renderer.removeClass(this.document.body, "app")

  }
  ngOnDestroy(): void {

    this._renderer.removeClass(this.document.body, "loginPage")
    this._renderer.addClass(this.document.body, "app")

  }
  getErrorUsername() {
    return this.password.hasError('required')
      ? 'You must enter a Username'
      : this.errorPassword;
  }
  getErrorPassword() {
    return this.password.hasError('required')
      ? 'You must enter a Password'
      : this.errorPassword;
  }
  getErrorEmail() {
    return this.email.hasError('required')
      ? 'You must enter a email'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : this.email.hasError('server')
          ? this.errorEmail
          : '';
  }

  checkLogin(formValues) {
    if (this.LoginForm.valid) {
      this.loader = true;
      const newLoginUser: LoginUser = formValues as LoginUser;

      // console.log(newLoginUser);
      this.auth.userLoginServerToken(newLoginUser).subscribe(
        res => {
          this.loader = false;

          if (res.user.active) {
            this.doLoginUser(res.user, res.token);

            this.router.navigate([environment.homeLandingPage]);
          } else {
            this.snackBar.open(config.loggingNotActivated, 'Ok', {
              duration: 4000
            });
          }


        },
        (err: HttpErrorResponse) => {
          this.loader = false;
          if (err.error.password) {
            this.password.setErrors({ server: true });
            this.errorPassword = err.error.password;
          }
          if (err.error.email) {
            this.email.setErrors({ server: true });
            this.errorEmail = err.error.email;
          }

          this.snackBar.open(err.error.non_field_errors, 'Ok', {
            duration: 4000
          });
        },
        () => {
        }
      );
    } else {
      this.snackBar.open(config.formValidationError, 'Ok', {
        duration: 400
      });
    }
  }

  private doLoginUser(user: any, tokens: string) {
    localStorage.setItem('user', JSON.stringify(user));
    // console.log(user.institution[0]);
    localStorage.setItem(AppConfig.institution, JSON.stringify(user.institution[0]));
    localStorage.setItem(this.JWT_TOKEN, tokens);
    this._userAccount.checkLoginStatus();
    this._navItemUpdateService.sendMessage('login');
  }
}
