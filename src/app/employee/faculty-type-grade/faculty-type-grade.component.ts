import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-faculty-type-grade',
  templateUrl: './faculty-type-grade.component.html',
  styleUrls: ['./faculty-type-grade.component.scss']
})
export class FacultyTypeGradeComponent implements OnInit {

  facultyTypeGradeData;

  constructor(public tableSettings: tableSettingsObject) {
    this.facultyTypeGradeData = this.tableSettings.facultyTypeGrade;
  }

  ngOnInit(): void {
  }

}
