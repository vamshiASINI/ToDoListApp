import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-leave-group-info',
  templateUrl: './leave-group-info.component.html',
  styleUrls: ['./leave-group-info.component.scss']
})
export class LeaveGroupInfoComponent implements OnInit {

  leaveGroupInfo = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.leaveGroupInfo = this.tableSettings.leaveGroupInfo;
  }

  ngOnInit(): void {
  }

}
