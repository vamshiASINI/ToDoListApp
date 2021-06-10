import { Component, OnInit } from '@angular/core';
import { Subject, Subscribable, Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
import { ApiService } from 'src/app/common/services/api.service';
import { InstitutionModel } from 'src/app/models/institutionModel';
import { globalFunctions } from 'src/app/common/globalObjects/globalFunctions';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjectTypeNormal = 'Normal';
  subjectTypeElective = 'Elective';
  programs = [];
  courses = [];
  program: any;
  course: any;
  isTableShown = false;
  filterField = [
    {
      name: 'Program',
      key: 'subject_type_global_id__in',
      apiUrl: 'academic/program/',
      data: 'program'
    },
    {
      name: 'Course',
      key: 'course_or_grade_class_management_id__in',
      apiUrl: 'academic/course-or-grade-class/',
      dependsOn: 'program_id__in',
      dependsOnKey: 'program',
      data: 'course'
    },
    {
      name: 'Academic Term',
      key: 'academicSession_id',
      type: 'select',
      dataSource: [],
      dependsOn: 'course_or_grade_class_management_id__in',
      dependsOnKey: 'course'
    }
  ]
  subjectType =
    [{ value: 1, nameDef: 'Normal', name: 'Normal change from local', }, { value: 2, nameDef: 'Elective', name: 'Elective change from local', }];

  subjectData: any = {};
  subjectGroup: any = {};
  subjectElectiveGroup: any = {};
  customLable: InstitutionModel;
  preFilter: { key: string; value: any; }[];
  autoCompleteModel = {};
  isAutoCompleteLoading = {};
  searchData: { value: any; field: any; };
  searchTextChanged = new Subject<any>();
  subscription: Subscription;
  filteredOptions: any = [];
  courseCompleteData = {};
  academicTerm: any;
  constructor(public tableSettings: tableSettingsObject, private globalFunctions: globalFunctions, private _authService: AuthService, private apiService: ApiService) {
    this.subjectData = this.tableSettings.academicSubjects;
    this.subjectGroup = this.tableSettings.academicSubjectGroup;
    this.subjectElectiveGroup = this.tableSettings.academicSubjectElectiveGroup;
  }



  ngOnInit(): void {
    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    // this.subjectData.title = this.customLable.customLabels.subject_group;
    this.subjectTypeNormal = this.customLable.customLabels.normal_subject;
    this.subjectTypeElective = this.customLable.customLabels.elective_subject;
    this.subjectType[0].name = this.subjectTypeNormal;
    this.subjectType[1].name = this.subjectTypeElective;

    this.subjectData.fields[5].dataSource = this.subjectType;
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(search => this.fetchProgramAndCourse(this.searchData))
    )
      .subscribe((data) => {
        this.isAutoCompleteLoading[this.searchData.field.name] = false;
        this.filteredOptions = data.results;
      });
  }

  search($event, field) {
    this.filteredOptions = [];
    console.log(field)
    this.isAutoCompleteLoading[field.name] = true;
    this.searchData = {
      value: $event.target.value,
      field: field,
    }
    this.searchTextChanged.next(this.searchData);
  }

  fetchProgramAndCourse(data) {
    let url = `${data.field.apiUrl}?&is_active=true&search=${data.value}&search_fields=name`
    if (data.field.dependsOn) {
      if (this[data.field.dependsOnKey]) {
        url += `&${data.field.dependsOn}=${this[data.field.dependsOnKey]}`;
        return this.apiService.get(url)
      }
    } else {
      return this.apiService.get(url)
    }
  }

  onAutoCompleteChange(data) {
    let url = `${data.apiUrl}?`
    this.filteredOptions = [];
    if (data.dependsOn) {
      if (this[data.dependsOnKey]) {
        url += `&${data.dependsOn}=${this[data.dependsOnKey]}`;
        this.isAutoCompleteLoading[data.name] = true;
        this.apiService.get(url).subscribe(res => {
          this.filteredOptions = res.results;
          this.isAutoCompleteLoading[data.name] = false;
          console.log(res)
        })
      }
    } else {
      this.isAutoCompleteLoading[data.name] = true;
      this.apiService.get(url).subscribe(res => {
        this.filteredOptions = res.results;
        this.isAutoCompleteLoading[data.name] = false;
        console.log(res)
      })
    }
  }

  autoCompleteSelect(data, event) {
    if (data.name === 'Course') {
      this.course = event.option.id.id;
      this.courseCompleteData = event.option.id;
      this.academicTerm = undefined;
      this.calculateAcademicTerms(this.courseCompleteData);
    } else {
      this.program = event.option.id.id
      this.course = undefined;
      this.autoCompleteModel['Course'] = undefined;
      this.filterField[2].dataSource = [];
      this.academicTerm = undefined;
    }
    this.filterChange()
  }

  calculateAcademicTerms(courseData) {
    let url = `academic/course-or-grade-class-term/?&is_active=true&course_or_grade_class_management_id__in=${courseData.id}`;
    this.apiService.get(url).subscribe(res => {
      this.filterField[2].dataSource = res.results;
    })
  }

  filterChange() {
    if (this.course && this.program && this.academicTerm) {
      this.subjectData.fields[8].defaultValue = this.academicTerm.id
      this.subjectElectiveGroup.fields[3].defaultValue = this.academicTerm.id
      this.subjectGroup.fields[3].defaultValue = this.academicTerm.id
      this.isTableShown = true;
      this.preFilter = [{ key: 'course_or_grade_class_management_id__in', value: this.course }, { key: 'course_or_grade_class_management_term_id__in', value: this.academicTerm.id }]
      this.subjectData.fields.forEach(element => {
        if (element.name === 'course_or_grade_class_management_id') {
          element.defaultValue = this.course;
          element.isFormHidden = true;
        }
      });
    } else {
      this.isTableShown = false;
    }
  }

}
// { name: 'subject_type_global', type: 'autoComplete', text: 'Type', isFormHidden: true, dataSourceUrl: 'global/subject-type/', dataSourceValue: 'name', dataSourceKey: 'subject_type_global_id' },