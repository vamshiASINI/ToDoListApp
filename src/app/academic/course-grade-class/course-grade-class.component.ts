import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Component({
  selector: 'app-course-grade-class',
  templateUrl: './course-grade-class.component.html',
  styleUrls: ['./course-grade-class.component.scss']
})
export class CourseGradeClassComponent implements OnInit {

  // courseGradeData = {
  //   fields: [
  //     { name: 'name', type: 'text', text: 'Session Name' },
  //     { name: 'description', type: 'textarea', optional: true },

  //     { name: 'program_id', type: 'autoComplete', text: 'Program', optional: false, isTableHidden: true, dataSourceUrl: 'academic/program/', dataSourceValue: 'name', dataSourceKey: 'program_id' },
  //     { name: 'program', type: 'autoComplete', text: 'Program', isFormHidden: true, dataSourceUrl: 'academic/program/', dataSourceValue: 'name', dataSourceKey: 'program_id' },


  //     { name: 'type_of_course_global_id', type: 'autoComplete', text: 'Type of Course', optional: false, isTableHidden: true, dataSourceUrl: 'global/academic-type-of-course-duration/', dataSourceValue: 'name', dataSourceKey: 'type_of_course_global_id' },
  //     { name: 'type_of_course_global', type: 'autoComplete', text: 'Type of Course', isFormHidden: true, dataSourceUrl: 'global/academic-type-of-course-duration/', dataSourceValue: 'name', dataSourceKey: 'type_of_course_global_id' },


  //     { name: 'type_of_course_global_duration', type: 'text', text: 'Duration' },
  //     { name: 'duration_in_years', type: 'text', text: 'Duration(Year)' },

  //     { name: 'employee_departments_id', type: 'autoComplete', text: 'Department', optional: false, isTableHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id' },
  //     { name: 'employee_departments', type: 'autoComplete', text: 'Department', isFormHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id' },


  //     { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
  //     { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
  //     { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
  //   ],
  //   apiUrl: 'academic/course-or-grade-class/',
  //   title: 'Course/Grade Class',
  //   formData: {}
  // };
  courseGradeData: any = {};
  customLable: InstitutionModel;
  constructor(private _authService: AuthService, public tableSettings: tableSettingsObject) {
    this.courseGradeData = this.tableSettings.academicCourseGrade;
  }


  ngOnInit(): void {
    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    this.courseGradeData.title = this.customLable.customLabels.course;
  }

}
