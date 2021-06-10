import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { InstitutionModel } from 'src/app/models/institutionModel';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BatchSectionService } from '../../service/batch-section.service';
@Component({
  selector: 'app-batch-section-add-from',
  templateUrl: './batch-section-add-from.component.html',
  styleUrls: ['./batch-section-add-from.component.scss']
})
export class BatchSectionAddFromComponent implements OnInit {

  program_id = new FormControl();
  course_grade_class_management_id = new FormControl();
  batch_name = new FormControl();
  start_date = new FormControl();
  academicSession = new FormControl();
  max_number_of_student = new FormControl();
  end_date = new FormControl();
  minDate = new Date();
  maxDate = new Date();
  batchFormIsActive = new FormControl(true);
  subject_normal_subject_list_id = new FormControl();
  batchForm = new FormGroup({
    program_id: this.program_id,
    course_grade_class_management_id: this.course_grade_class_management_id,
    batch_name: this.batch_name,
    start_date: this.start_date,
    end_date: this.end_date,
    academicSession: this.academicSession,
    max_number_of_student: this.max_number_of_student,
    subject_normal_subject_list_id: this.subject_normal_subject_list_id,
    is_active: this.batchFormIsActive
  });
  /*
    subjectElectiveGroupFormIsActive = new FormControl(true);
    subjectElectiveGroupFormID = new FormControl(true);
    subjectElectiveGroupFormName = new FormControl();
    subjectElectiveGroupFormSubject = new FormControl();
    batch_or_section_management_id = new FormControl();
    last_date_to_choose_elective_group = new FormControl();
    last_date_elective_group = new FormControl();
  
    subjectElectiveGroupForm = new FormGroup({
      id: this.subjectElectiveGroupFormID,
      name: this.subjectElectiveGroupFormName,
      batch_or_section_management_id: this.batch_or_section_management_id,
      last_date_to_choose: this.last_date_to_choose_elective_group,
      last_date: this.last_date_elective_group,
      is_active: this.subjectElectiveGroupFormIsActive,
      subject_id: this.subjectElectiveGroupFormSubject,
    });*/

  programVar = 'Pro';
  courseGradeVar = 'Cours';
  normalSubjectListVar = 'Noraml';
  batchVal = 'batch';
  electiveGroup = '';
  subjectGroup = '';

  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]>;
  customLable: InstitutionModel;


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  constructor(private _authService: AuthService, private _batchSectionService: BatchSectionService) { }

  ngOnInit(): void {

    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    this.filteredOptions = this.program_id.valueChanges.pipe(
      startWith(''),

    );
    this.setCustomLable();
    this.initCall();
  }
  initCall(): void {
    this._batchSectionService.getSubjectNoramlTypeAndActive().subscribe(
      res => {
        console.log(res);
      }, err => {

      }, () => {

      }
    );
  }
  setCustomLable(): void {
    this.programVar = this.customLable.customLabels.program;
    this.courseGradeVar = this.customLable.customLabels.course;
    this.normalSubjectListVar = this.customLable.customLabels.normal_subject;
    this.batchVal = this.customLable.customLabels.batch;
    this.electiveGroup = this.customLable.customLabels.elective_group;
    this.subjectGroup = this.customLable.customLabels.subject_group;
  }

}
