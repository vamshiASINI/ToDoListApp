import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-leave-type-payments',
  templateUrl: './leave-type-payments.component.html',
  styleUrls: ['./leave-type-payments.component.scss']
})
export class LeaveTypePaymentsComponent implements OnInit {
  leaveTypePayment = {};
  constructor(public tableSettings: tableSettingsObject) {
    this.leaveTypePayment = this.tableSettings.leaveTypePayment;
  }

  ngOnInit(): void {
  }

}
