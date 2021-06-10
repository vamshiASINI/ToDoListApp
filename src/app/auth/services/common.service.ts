import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Tokens } from 'src/app/models/tokens';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userRole = new Tokens();

  constructor() {
    // this.tokenToUserInfo();
    // console.log('hi');
    // console.log(this.userRole);
  }


  logoutUser() {
    delete this.userRole;
    // console.log('logoutUser', this.userRole);
    this.userRole = new Tokens();
    // console.log('logoutUser', this.userRole);
  }
  tokenToUserInfo() {

    // console.log('tokenToUserInfo');
    const JWT = localStorage.getItem('JWT_TOKEN');
    // console.log(JWT);
    if (JWT != null && JWT.length > 1) {
      const val = JWT.split('.');
      if (val.length) {
        const str = atob(val[1]);
        // console.log(str);

        const obj = JSON.parse(str);
        this.userRole = obj;
        // console.log(obj);
      }
    }
  }





  getUserDetails() {
    this.tokenToUserInfo();
    return localStorage.getItem('userName');
  }





}
