import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  academicSessionData = {}

  constructor(public tableSettings: tableSettingsObject) {
    this.academicSessionData = this.tableSettings.academicSession;
  }

  ngOnInit(): void {
  }

}
