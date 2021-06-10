import { AuthService } from 'src/app/auth/services/auth.service';
import { BillService } from './../bill.service';
import { Component, OnInit } from '@angular/core';
import { BillCurrentValidityModel } from '../models/bill-current-validity-model';

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.component.html',
  styleUrls: ['./your-products.component.scss']
})
export class YourProductsComponent implements OnInit {
  instituteID = 0;
  watingForserver = false;
  billCurrentValidity: BillCurrentValidityModel;
  constructor(private _billService: BillService, private _auth: AuthService) { }

  ngOnInit(): void {
    this.instituteID = this._auth.getCurrentInstId();
    this.getCurrentBilingInfo();
  }
  getCurrentBilingInfo(): void {
    this.watingForserver = true;
    this._billService.getCurrentBilingInfo(this.instituteID).subscribe(
      res => {
        // console.log(res);
        this.billCurrentValidity = res;
        this.watingForserver = false;
      }, err => {
        this.watingForserver = false;
      }, () => {

      }
    );
  }
}
