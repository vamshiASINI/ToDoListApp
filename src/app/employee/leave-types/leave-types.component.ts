import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.scss']
})
export class LeaveTypesComponent implements OnInit {

  leaveType = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.leaveType = this.tableSettings.leaveType;
  }

  ngOnInit(): void {
  }

}
