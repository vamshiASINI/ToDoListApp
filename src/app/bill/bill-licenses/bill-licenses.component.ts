import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BillService } from '../bill.service';
import { BillCurrentValidityModel } from '../models/bill-current-validity-model';

@Component({
  selector: 'app-bill-licenses',
  templateUrl: './bill-licenses.component.html',
  styleUrls: ['./bill-licenses.component.scss']
})
export class BillLicensesComponent implements OnInit {
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
