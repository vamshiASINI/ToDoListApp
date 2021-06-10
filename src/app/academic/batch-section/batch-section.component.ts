import { BatchSectionAddFromComponent } from './batch-section-add-from/batch-section-add-from.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/common/services/api.service';
import { InstitutionModel } from 'src/app/models/institutionModel';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { globalFunctions } from 'src/app/common/globalObjects/globalFunctions';
import { DialogService } from 'src/app/common/services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-batch-section',
  templateUrl: './batch-section.component.html',
  styleUrls: ['./batch-section.component.scss']
})
export class BatchSectionComponent implements OnInit {
  batchData = {
    fields: [
      { name: 'name', type: 'text', text: 'Batch Name' },


      { name: 'program_id', type: 'autoComplete', text: 'Program', optional: false, isTableHidden: true, dataSourceUrl: 'academic/program/', dataSourceValue: 'name', dataSourceKey: 'program_id' },
      { name: 'program', type: 'autoComplete', text: 'Program', isFormHidden: true, dataSourceUrl: 'academic/program/', dataSourceValue: 'name', dataSourceKey: 'program_id' },


      { name: 'course_grade_class_management_id', type: 'autoComplete', text: 'course', optional: false, isTableHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_grade_class_management_id' },
      { name: 'course_grade_class_management', type: 'autoComplete', text: 'course', isFormHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_grade_class_management_id' },


      { name: 'start_date', type: 'date', text: 'Start Date', dateValidation: { minDate: '', maxDate: '' } },
      { name: 'end_date', type: 'date', text: 'End Date', dateValidation: { minDate: '', maxDate: '' } },
      { name: 'max_number_of_student', type: 'number', text: 'Max Student' },


      { name: 'academicSession_id', type: 'autoComplete', text: 'Session', optional: false, isTableHidden: true, dataSourceUrl: 'academic/session/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id' },
      { name: 'academicSession', type: 'autoComplete', text: 'Session', isFormHidden: true, dataSourceUrl: 'academic/session/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id' },

      { name: 'course_or_grade_class_management_term_id', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
      // { name: 'academic_term_value', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },



      { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
      { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
      { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
    ],
    apiUrl: 'academic/batch-or-section/',
    title: 'Batch/Section',
    formData: {}
  };

  extraInputFields = [
    {
      title: 'Normal Subject',
      // fields: [
      //   { name: 'subject_list_id', type: 'chip', text: '', optional: true, isTableHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id', isAddAllow: true, addObjectKey: 'academicSubjects', },
      //   { name: 'subject_list', type: 'chip', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id' },
      //   { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
      // ],
      data: [],
      dataSourceUrl: 'academic/subject/',
      apiUrl: 'academic/batch-or-section-normal/',
      keyId: 'batch_or_section_management_id',
      formData: { id: null, subject_list_id: [], is_active: true, batch_or_section_management_id: null }
    },
    {
      title: 'Subject Groups',
      // fields: [
      //   { name: 'subject_list_id', type: 'chip', text: '', optional: true, isTableHidden: true, dataSourceUrl: 'academic/subject-subject-group/', dataSourceValue: 'name', dataSourceKey: 'id', isAddAllow: true, addObjectKey: 'academicSubjectGroup', },
      //   { name: 'number_of_subject', type: 'number', text: 'No. of Subject' },
      //   { name: 'last_date_to_choose', type: 'boolean', optional: true },
      //   { name: 'last_date_select_subject', type: 'date', text: 'Last Date to Select Subject' },
      //   { name: 'score_options_id', type: 'autoComplete', text: 'Score', optional: false, isTableHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id', isConditionalCheck: true, conditionalFormula: ['score_options_id', 'batch_mark_calcutation_id', 'hideShow', 1] },
      //   { name: 'score_options', type: 'autoComplete', text: 'Score', isFormHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id' },

      //   { name: 'batch_mark_calcutation_id', type: 'autoComplete', text: 'Formula', optional: false, isTableHidden: true, isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
      //   { name: 'batch_mark_calcutation', type: 'autoComplete', text: 'Formula', isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
      //   { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
      // ],
      dataSourceUrl: 'academic/subject-subject-group/',
      apiUrl: 'academic/batch-or-section-subject-group/',
      editAiUrl: 'academic/batch-or-section-subject-group/',
      data: [],
      keyId: 'batch_or_section_management_id',
      formData: { id: null, subject_list_id: [], is_active: true, batch_or_section_management_id: null }
    },
    {
      title: 'Elective Subject Groups',
      // fields: [
      //   { name: 'subject_list_id', type: 'checkbox', text: 'Subject List', optional: true, isTableHidden: true, dataSourceUrl: 'academic/subject-elective-group/', dataSourceValue: 'name', dataSourceKey: 'id', isAddAllow: true, addObjectKey: 'academicSubjectGroup', },
      //   { name: 'last_date_to_choose', type: 'boolean', optional: true },
      //   { name: 'last_date_select_subject', type: 'date', text: 'Last Date to Select Subject' },
      //   { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
      // ],
      dataSourceUrl: 'academic/subject-elective-group/',
      apiUrl: 'academic/batch-or-section-elective-group/',
      data: [],
      keyId: 'batch_or_section_management_id',
      formData: { id: null, subject_list_id: [], is_active: true, batch_or_section_management_id: null }
    }
  ]
  formData: any = {};
  scoreOptions = [];
  marksOptions = [];
  customLable: InstitutionModel;
  subscription: Subscription;
  batchLablePlural: string;

  batchFormId = new FormControl(0);

  batchForm = new FormGroup({
    id: this.batchFormId,

  });
  validFields: any[];
  programs = [];
  courses = [];
  program: any;
  course: any;
  academicSession: any;
  isTableShown = false;
  filterField = [
    {
      name: 'Program',
      key: 'subject_type_global_id__in',
      apiUrl: 'academic/program/',
      data: 'program',
      is_active: true
    },
    {
      name: 'Course',
      key: 'course_or_grade_class_management_id__in',
      apiUrl: 'academic/course-or-grade-class/',
      dependsOn: 'program_id__in',
      dependsOnKey: 'program',
      data: 'course',
      is_active: true
    },
    {
      name: 'Academic Session',
      key: 'academicSession_id',
      apiUrl: 'academic/session/',
      dependsOn: 'course_or_grade_class_management_id__in',
      dependsOnKey: 'course',
      data: 'academicSession'
    },
    {
      name: 'Academic Term',
      key: 'course_or_grade_class_management_term_id',
      type: 'select',
      dataSource: [],
      dependsOn: 'course_or_grade_class_management_id__in',
      dependsOnKey: 'course',
      is_active: true
    }
  ]

  preFilter: { key: string; value: any; }[];
  autoCompleteModel = {};
  isAutoCompleteLoading = {};
  searchData: { value: any; field: any; };
  searchTextChanged = new Subject<any>();
  // subscription: Subscription;
  filteredOptions: any = [];
  courseCompleteData = {};
  academicTerm: any;
  isAddMode = false;
  isEditMode = false;
  isSubmitInProgress: any = false;
  constructor(private _authService: AuthService, private api: ApiService, private _snackBar: MatSnackBar, private dialogService: DialogService, public dialog: MatDialog, private globalFunctions: globalFunctions) { }


  ngOnInit(): void {
    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    console.log(this.customLable);
    this.batchData.title = this.customLable.customLabels.batch;
    this.batchLablePlural = this.customLable.customLabels.batch;
    this.checkEditMode();
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(search => this.fetchProgramAndCourse(this.searchData))
    )
      .subscribe((data) => {
        this.isAutoCompleteLoading[this.searchData.field.name] = false;
        this.filteredOptions = data.results;
      });

    this.api.get('global/score-option/?is_active=true').subscribe(res => {
      this.scoreOptions = res.results;
    });
    this.api.get('global/mark-calculation/?is_active=true').subscribe(res => {
      this.marksOptions = res.results;
    });
  }

  checkEditMode() {
    this.subscription = this.api.employeeEdit.subscribe(res => {
      console.log(res);
      this.isEditMode = true;
      this.isTableShown = false;
      if (res) {
        this.formData = res;
        this.extraInputFields.forEach(field => {
          this.api.get(`${field.apiUrl}?batch_or_section_management_id__in=${res.id}`).subscribe(data => {
            field.formData = data.results[0];
            field.data.forEach(subjectData => {
              if (data.results[0]['subject_list_id'].includes(subjectData.id)) {
                subjectData.completed = true;
              }
            })
          })
        })
      }
    })
  }

  add() {
    this.isAddMode = true;
    this.isTableShown = false;
    this.formData = {};
    this.extraInputFields.forEach(field => {
      field.formData = { id: null, subject_list_id: [], is_active: true, batch_or_section_management_id: null };
      field.data = [];
    });
    this.fetchSubjects();
  }

  fetchSubjects() {
    let params = `?is_active=true&in_group=false`;
    if (this.preFilter) {
      this.preFilter.forEach(element => {
        params += `&${element.key}=${element.value}`
      });
    }
    this.extraInputFields.forEach(element => {
      this.api.get(`${element.dataSourceUrl}${params}`).subscribe(res => {
        element.data = res.results;
      });
    });
  }

  calculateValidFields() {
    this.validFields = [];
    if (this.batchData.fields) {
      this.batchData.fields.forEach(field => {
        if (!field.isFormHidden) {
          this.validFields.push(field);
        }
      });
    }
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
    let url = `${data.field.apiUrl}?&search=${data.value}&search_fields=name`;
    if (data.is_active) {
      url = `${data.field.apiUrl}?&is_active=true&search=${data.value}&search_fields=name`
    }
    if (data.field.dependsOn) {
      if (this[data.field.dependsOnKey]) {
        url += `&${data.field.dependsOn}=${this[data.field.dependsOnKey]}`;
        return this.api.get(url)
      }
    } else {
      return this.api.get(url)
    }
  }

  onAutoCompleteChange(data) {
    let url = `${data.apiUrl}?`
    if (data.is_active) {
      url = `${data.apiUrl}?&is_active=true`
    }
    this.filteredOptions = [];
    if (data.dependsOn) {
      if (this[data.dependsOnKey]) {
        url += `&${data.dependsOn}=${this[data.dependsOnKey]}`;
        this.isAutoCompleteLoading[data.name] = true;
        this.api.get(url).subscribe(res => {
          this.filteredOptions = res.results;
          this.isAutoCompleteLoading[data.name] = false;
          console.log(res)
        })
      }
    } else {
      this.isAutoCompleteLoading[data.name] = true;
      this.api.get(url).subscribe(res => {
        this.filteredOptions = res.results;
        this.isAutoCompleteLoading[data.name] = false;
        console.log(res)
      })
    }
  }

  autoCompleteSelect(data, event) {
    console.log(event)
    if (data.name === 'Course') {
      this.course = event.option.id.id;
      this.courseCompleteData = event.option.id;
      this.academicTerm = undefined;
      this.calculateAcademicTerms(this.courseCompleteData);
    } else if (data.name === 'Program') {
      this.program = event.option.id.id;
      this.course = undefined;
      this.autoCompleteModel['Course'] = undefined;
      this.filterField[3].dataSource = [];
      this.academicTerm = undefined;
    } else {
      this.batchData.fields[5].dateValidation.minDate = event.option.id.start_date;
      this.batchData.fields[5].dateValidation.maxDate = event.option.id.end_date;
      this.batchData.fields[6].dateValidation.minDate = event.option.id.start_date;
      this.batchData.fields[6].dateValidation.maxDate = event.option.id.end_date;
      this.academicSession = event.option.id.id;
    }
    this.filterChange()
  }

  calculateAcademicTerms(courseData) {
    let url = `academic/course-or-grade-class-term/?&is_active=true&course_or_grade_class_management_id__in=${courseData.id}`;
    this.api.get(url).subscribe(res => {
      this.filterField[3].dataSource = res.results;
    })
  }

  filterChange() {
    if (this.course && this.program && this.academicSession && this.academicTerm) {
      this.isTableShown = true;
      this.isEditMode = false;
      this.isAddMode = false;
      this.preFilter = [{ key: 'academicSession_id__in', value: this.academicSession }, { key: 'course_grade_class_management_id__in', value: this.course }, { key: 'program_id__in', value: this.program }, { key: 'course_or_grade_class_management_term_id__in', value: this.academicTerm.id }];
      this.fetchSubjects();
      this.batchData.fields[10].defaultValue = this.academicTerm.id;
      this.batchData.fields.forEach(element => {
        if (element.name === 'program_id') {
          element.defaultValue = this.program;
          element.isFormHidden = true;
        } else if (element.name === 'course_grade_class_management_id') {
          element.defaultValue = this.course;
          element.isFormHidden = true;
        } else if (element.name === 'academicSession_id') {
          element.defaultValue = this.academicSession;
          element.isFormHidden = true;
        }
      });
    } else {
      this.isTableShown = false;
      this.isEditMode = false;
    }
    this.calculateValidFields()
  }

  submitForm() {
    if (this.isSubmitInProgress) {
      return;
    }
    if (this.batchData.fields) {
      this.batchData.fields.forEach(field => {
        if (field.defaultValue) {
          if (typeof (this.formData[field.name]) === 'undefined' || this.formData[field.name] === null) {
            this.formData[field.name] = field.defaultValue;
          }
        }
      });
    }

    let apiType = 'put';
    if (!this.formData.id) {
      apiType = 'post';
    }
    this.isSubmitInProgress = true;
    this.api[apiType](`${this.batchData.apiUrl}${this.formData.id ? `${this.formData.id}/` : ''}`, this.formData, true).subscribe((data: any) => {
      if (data) {
        this.submitExtraFields(data, apiType)
      }
    }, (err) => {
      this.isSubmitInProgress = false;
      this.isTableShown = true;
      this.isEditMode = false;
      this.isAddMode = false;
    });
  }

  submitExtraFields(data, apiType) {
    let count = 0;
    let msg = 'Added successfully'
    this.extraInputFields.forEach(field => {
      let selectedData = [];
      field.data.forEach(subject => {
        if (subject.completed) selectedData.push(subject.id)
      });
      field.formData.subject_list_id = selectedData;
      if (apiType === 'post') {
        field.formData.batch_or_section_management_id = data.id;
        this.api.post(field.apiUrl, field.formData).subscribe(res => {
          console.log(res);
          count = count + 1;
        })
      } else {
        msg = 'Edited successfully'
        this.api.put(`${field.apiUrl}${field.formData.id}/`, field.formData).subscribe(res => {
          console.log(res);
          count = count + 1;
        })
      }
    })

    let timeInterval = setInterval(() => {
      if (count === 3) {
        clearInterval(timeInterval);
        this.dialogService.openSnackBar(this._snackBar, msg, 'Success');
        this.isTableShown = true;
        this.isEditMode = false;
        this.isAddMode = false;
        this.isSubmitInProgress = false;
      }
    }, 500)
  }

  cancel() {
    this.isTableShown = true;
    this.isEditMode = false;
    this.isAddMode = false;
  }

}
