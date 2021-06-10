import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  // Need HttpClient to communicate over HTTP with Web API
  constructor(private http: HttpClient, private router: Router) { }
  private readonly JWT_TOKEN = 'TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  // User related properties
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('user')));

  checkLoginStatus(): boolean {
    // console.log(localStorage.getItem(this.JWT_TOKEN));
    if (localStorage.getItem(this.JWT_TOKEN)) {
      return true;
    } else {
      return false;
    }
  }

  get isLoggesIn() {
    // console.log('is log in', this.loginStatus.asObservable());
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }
  logout() {

    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem('user');
    localStorage.removeItem('institution');
    this.checkLoginStatus();
    this.router.navigate(['/login']);
    // console.log('Logged Out Successfully');
  }

}
