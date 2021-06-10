import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
@Component({
  selector: 'app-student-custom-field',
  templateUrl: './student-custom-field.component.html',
  styleUrls: ['./student-custom-field.component.scss']
})
export class StudentCustomFieldComponent implements OnInit {
  studentSetting = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.studentSetting = tableSettings.studentSettingCustomField;
  }

  ngOnInit(): void {
  }

}
