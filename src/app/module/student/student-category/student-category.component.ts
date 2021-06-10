import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-student-category',
  templateUrl: './student-category.component.html',
  styleUrls: ['./student-category.component.scss']
})
export class StudentCategoryComponent implements OnInit {
  studentCategory = {}

  constructor(public tableSettings: tableSettingsObject) {
    this.studentCategory = this.tableSettings.studentCategory;
  }

  ngOnInit(): void {
  }

}
