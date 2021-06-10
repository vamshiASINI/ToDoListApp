import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-leave-groups',
  templateUrl: './leave-groups.component.html',
  styleUrls: ['./leave-groups.component.scss']
})
export class LeaveGroupsComponent implements OnInit {

  leaveGroupData = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.leaveGroupData = this.tableSettings.leaveGroups;
  }

  ngOnInit(): void {
  }

}
