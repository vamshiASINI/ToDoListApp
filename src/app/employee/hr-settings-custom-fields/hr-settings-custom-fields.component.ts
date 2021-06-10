import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-hr-settings-custom-fields',
  templateUrl: './hr-settings-custom-fields.component.html',
  styleUrls: ['./hr-settings-custom-fields.component.scss']
})
export class HrSettingsCustomFieldsComponent implements OnInit {

  hrSettings = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.hrSettings = tableSettings.hrSettingsCustomsFields;
  }

  ngOnInit(): void {
  }

}
