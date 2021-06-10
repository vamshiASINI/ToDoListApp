
import { AuthService } from 'src/app/auth/services/auth.service';
import { BillService } from './../bill.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlanInfoModel } from '../models/plan-info-model';

@Component({
  selector: 'app-bill-plan-show',
  templateUrl: './bill-plan-show.component.html',
  styleUrls: ['./bill-plan-show.component.scss']
})
export class BillPlanShowComponent implements OnInit {

  planAll: PlanInfoModel[];
  onboarded: number;
  userOnBoard: boolean;
  currencySymbol = '';

  @Output() planTrial = new EventEmitter();
  @Output() planSetSelected = new EventEmitter();

  constructor(private _billService: BillService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.getAllBillInfo();
    this.currencySymbol = this._auth.getUserCurrency();
    this.userOnBoard = this._auth.isUserOnboarding();
  }
  getAllBillInfo(): void {
    this._billService.getAllPlanByUser().subscribe(
      res => {
        this.planAll = res.plan;
        this.onboarded = res.onboarded;
      }, err => {

      }, () => {

      }
    );
  }
  startTrial(valIS): void {
    // console.log('Trial');
    this.planTrial.emit(valIS);
  }
  buyThisPlan(planSet): void {
    // console.log(planSet);
    this.planSetSelected.emit(planSet);
  }
  onSelectPlanThisNow(pos: number): void {

    this.planAll.forEach(element => {
      element.onboarded = false;
    });

    this.planAll[pos].onboarded = true;
  }
}
