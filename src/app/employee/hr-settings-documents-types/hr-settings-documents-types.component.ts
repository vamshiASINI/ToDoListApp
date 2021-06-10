import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-hr-settings-documents-types',
  templateUrl: './hr-settings-documents-types.component.html',
  styleUrls: ['./hr-settings-documents-types.component.scss']
})
export class HrSettingsDocumentsTypesComponent implements OnInit {
  hrSettings = {};


  constructor(public tableSettings: tableSettingsObject) {
    this.hrSettings = this.tableSettings.hrSettingsDocumentTypes;
  }

  ngOnInit(): void {
  }

}
