import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BillService } from '../bill.service';
import { BillCurrentPlanBillListModel } from '../models/bill-current-plan-bill-list-model';

@Component({
  selector: 'app-bills-payments',
  templateUrl: './bills-payments.component.html',
  styleUrls: ['./bills-payments.component.scss']
})
export class BillsPaymentsComponent implements OnInit {
  billCurrentPlanBillList: BillCurrentPlanBillListModel[];
  instituteID = 0;
  watingForserver = false;

  constructor(private _billService: BillService, private _auth: AuthService) { }

  ngOnInit(): void {
    this.instituteID = this._auth.getCurrentInstId();
    this.getBilingListInfo();
  }
  getBilingListInfo(): void {
    this._billService.getBilingListInfo(this.instituteID).subscribe(
      res => {

        this.billCurrentPlanBillList = res;
      }, err => {

      }, () => {

      }
    );
  }


}
