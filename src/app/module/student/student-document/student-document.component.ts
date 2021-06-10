import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-student-document',
  templateUrl: './student-document.component.html',
  styleUrls: ['./student-document.component.scss']
})
export class StudentDocumentComponet implements OnInit {
  studentDocument = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.studentDocument = this.tableSettings.studentSettingsDocumentTypes;
  }
  ngOnInit(): void {
  }

}
