import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
import { ApiService } from 'src/app/common/services/api.service';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Component({
  selector: 'app-module-chapter',
  templateUrl: './module-chapter.component.html',
  styleUrls: ['./module-chapter.component.scss']
})
export class ModuleChapterComponent implements OnInit {
  modulesData: any = {};
  customLable: InstitutionModel;
  programs = [];
  courses = [];
  program: any;
  course: any;
  subject: any;
  isTableShown = false;
  filterField = [
    {
      name: 'Program',
      key: 'subject_type_global_id__in',
      apiUrl: 'academic/program/',
      dependsOnReset: ['course', 'subject'],
      data: 'program'
    },
    {
      name: 'Course',
      key: 'course_or_grade_class_management_id__in',
      apiUrl: 'academic/course-or-grade-class/',
      dependsOn: 'program_id__in',
      dependsOnKey: 'program',
      dependsOnReset: ['subject'],
      data: 'course'
    },
    {
      name: 'Academic Term',
      key: 'course_or_grade_class_management_term_id',
      type: 'select',
      dataSource: [],
      dependsOn: 'course_or_grade_class_management_id__in',
      dependsOnKey: 'course',
      is_active: true
    },
    {
      name: 'Subject',
      key: 'subject_id',
      apiUrl: 'academic/subject/',
      dependsOn: 'course_or_grade_class_management_term_id__in',
      dependsOnKey: 'academicTerm',
      data: 'subject'
    }
  ]
  preFilter: { key: string; value: any; }[];
  autoCompleteModel = {};
  isAutoCompleteLoading = {};
  searchData: { value: any; field: any; };
  searchTextChanged = new Subject<any>();
  subscription: Subscription;
  filteredOptions: any = [];
  isView = 'academicTopicSkills';
  academicTerm: any;
  courseCompleteData: any;
  constructor(private _authService: AuthService, private api: ApiService, public tableSettings: tableSettingsObject, private apiService: ApiService) {
    this.modulesData = this.tableSettings.academicModuleChapter;
  }

  ngOnInit(): void {
    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    this.modulesData.title = this.customLable.customLabels.module_chapter;

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
      this.subject = null;
      this.autoCompleteModel['Subject'] = undefined;
      this.calculateAcademicTerms(this.courseCompleteData);
    } else if (data.name === 'Program') {
      this.program = event.option.id.id;
      this.subject = null;
      this.course = null;
      this.autoCompleteModel['Subject'] = undefined;
      this.autoCompleteModel['Course'] = undefined;
    } else {
      this.subject = event.option.id.id;
    }
    this.filterChange()
  }

  filterChange() {
    if (this.course && this.program && this.subject && this.academicTerm) {
      this.isTableShown = true;
      this.preFilter = [{ key: 'subject_id__in', value: this.subject }]
      this.modulesData.fields.forEach(element => {
        if (element.name === 'subject_id') {
          element.defaultValue = this.subject;
          element.isFormHidden = true;
        }
      });
    } else {
      this.isTableShown = false;
    }
  }

  calculateAcademicTerms(courseData) {
    let url = `academic/course-or-grade-class-term/?&is_active=true&course_or_grade_class_management_id__in=${courseData.id}`;
    this.api.get(url).subscribe(res => {
      this.filterField[2].dataSource = res.results;
    })
  }


}
