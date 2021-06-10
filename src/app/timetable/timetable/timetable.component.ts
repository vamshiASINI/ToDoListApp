import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/common/services/api.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  tableData = [
    {
      day: 'Monday',
      periods: [
        { id: 1, time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
        { time: '11:30-12:30', subject: 'History' },
        { time: '12:30-1:30', subject: 'Physics' },
        { time: '1:30-2:30', subject: 'Geography' },
      ]
    },
    {
      day: 'Tuesday',
      periods: [
        { time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
        { time: '11:30-12:30', subject: 'History' },
        { time: '12:30-1:30', subject: 'Physics' },
        { time: '1:30-2:30', subject: 'Geography' },
      ]
    },
    {
      day: 'Wednesday',
      periods: [
        { time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
        { time: '11:30-12:30', subject: 'History' },
        { time: '12:30-1:30', subject: 'Physics' },
        { time: '1:30-2:30', subject: 'Geography' },
      ]
    },
    {
      day: 'Thursday',
      periods: [
        { time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
        { time: '11:30-12:30', subject: 'History' },
        { time: '12:30-1:30', subject: 'Physics' },
        { time: '1:30-2:30', subject: 'Geography' },
      ]
    },
    {
      day: 'Friday',
      periods: [
        { time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
        { time: '11:30-12:30', subject: 'History' },
        { time: '12:30-1:30', subject: 'Physics' },
        { time: '1:30-2:30', subject: 'Geography' },
      ]
    },
    {
      day: 'Saturday',
      periods: [
        { time: '9-9:30', subject: 'Maths' },
        { time: '9:30-10:30', subject: 'English' },
        { time: '10:30-11:30', subject: 'Language1' },
      ]
    },
    {
      day: 'Sunday',
      periods: []
    },
  ]

  filterField = [
    {
      name: 'Academic Session',
      key: 'academicSession_id',
      apiUrl: 'academic/session/',
    },
    {
      name: 'Program',
      key: 'subject_type_global_id__in',
      apiUrl: 'academic/program/'
    },
    {
      name: 'Course',
      key: 'course_or_grade_class_management_id__in',
      apiUrl: 'academic/course-or-grade-class/',
      dependsOn: 'program_id__in',
      dependsOnKey: 'program'
    },
    {
      name: 'Batch',
      key: 'course_or_grade_class_management_id__in',
      apiUrl: 'academic/batch-or-section/',
      dependsOn: 'program_id__in',
      dependsOnKey: 'program'
    },
  ];
  validFields: any[];
  programs = [];
  courses = [];
  program: any;
  course: any;
  academicSession: any;
  isTableShown = false;
  autoCompleteModel = {};
  isAutoCompleteLoading = {};
  searchData: { value: any; field: any; };
  searchTextChanged = new Subject<any>();
  // subscription: Subscription;
  filteredOptions: any = [];
  subscription: any;
  preFilter: { key: string; value: any; }[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(search => this.fetchProgramAndCourse(this.searchData))
    )
      .subscribe((data: any) => {
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
        return this.api.get(url)
      }
    } else {
      return this.api.get(url)
    }
  }

  onAutoCompleteChange(data) {
    let url = `${data.apiUrl}?`
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
    if (data.name === 'Course') {
      this.course = event.option.id;
    } else if (data.name === 'Program') {
      this.program = event.option.id;
      this.course = undefined;
      this.autoCompleteModel['Course'] = undefined;
    } else {
      this.academicSession = event.option.id;
    }
    this.filterChange()
  }

  filterChange() {
    if (this.course && this.program && this.academicSession) {
      this.isTableShown = true;
      this.preFilter = [{ key: 'academicSession_id__in', value: this.academicSession }, { key: 'course_grade_class_management_id__in', value: this.course }, { key: 'program_id__in', value: this.program }]
      // this.batchData.fields.forEach(element => {
      //   if (element.name === 'program_id') {
      //     element.defaultValue = this.program;
      //     element.isFormHidden = true;
      //   } else if (element.name === 'course_grade_class_management_id') {
      //     element.defaultValue = this.course;
      //     element.isFormHidden = true;
      //   } else if (element.name === 'academicSession_id') {
      //     element.defaultValue = this.academicSession;
      //     element.isFormHidden = true;
      //   }
      // });
    } else {
      this.isTableShown = false;
    }
  }

}
