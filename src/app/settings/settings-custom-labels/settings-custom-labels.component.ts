import { InstituteTypeGlobalModel } from './../models/institute-type-global-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingService } from './../setting.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SettingsCustomLableModel } from '../models/settings-custom-lable-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppConfig } from 'src/app/appConfig';
import { CustomLabelsUpdateService } from 'src/app/services/common/custom-labels-update.service';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Component({
  selector: 'app-settings-custom-labels',
  templateUrl: './settings-custom-labels.component.html',
  styleUrls: ['./settings-custom-labels.component.scss']
})
export class SettingsCustomLabelsComponent implements OnInit {
  instituteID = 0;
  settingsCustomLableModel: SettingsCustomLableModel;
  constructor(private _authService: AuthService, private _settingService: SettingService, private _matSnackBar: MatSnackBar, private _customLabelsUpdateService: CustomLabelsUpdateService) { }

  program = new FormControl('');
  program_plural = new FormControl('');

  course = new FormControl('');
  course_plural = new FormControl('');

  batch = new FormControl('');
  batch_plural = new FormControl('');

  normal_subject = new FormControl('');
  normal_subject_plural = new FormControl('');

  elective_subject = new FormControl('');
  elective_subject_plural = new FormControl('');

  elective_group = new FormControl('');
  elective_group_plural = new FormControl('');

  subject_group = new FormControl('');
  subject_group_plural = new FormControl('');

  module_chapter = new FormControl('');
  module_chapter_plural = new FormControl('');

  topics_skills = new FormControl('');
  topics_skills_plural = new FormControl('');


  customLabelsForm = new FormGroup({
    program: this.program,
    program_plural: this.program_plural,

    course: this.course,
    course_plural: this.course_plural,

    batch: this.batch,
    batch_plural: this.batch_plural,

    normal_subject: this.normal_subject,
    normal_subject_plural: this.normal_subject_plural,

    elective_subject: this.elective_subject,
    elective_subject_plural: this.elective_subject_plural,

    elective_group: this.elective_group,
    elective_group_plural: this.elective_group_plural,

    subject_group: this.subject_group,
    subject_group_plural: this.subject_group_plural,

    module_chapter: this.module_chapter,
    module_chapter_plural: this.module_chapter_plural,

    topics_skills: this.topics_skills,
    topics_skills_plural: this.topics_skills_plural,

  });
  updatingServer = false;
  ngOnInit(): void {
    this.instituteID = this._authService.getCurrentInstId();
    this.getCustomLabels();
  }
  updateDate(): void {
    this.customLabelsForm.patchValue({
      program: this.settingsCustomLableModel.program,
      program_plural: this.settingsCustomLableModel.program_plural,

      course: this.settingsCustomLableModel.course,
      course_plural: this.settingsCustomLableModel.course_plural,

      batch: this.settingsCustomLableModel.batch,
      batch_plural: this.settingsCustomLableModel.batch_plural,

      normal_subject: this.settingsCustomLableModel.normal_subject,
      normal_subject_plural: this.settingsCustomLableModel.normal_subject_plural,

      elective_subject: this.settingsCustomLableModel.elective_subject,
      elective_subject_plural: this.settingsCustomLableModel.elective_subject_plural,

      elective_group: this.settingsCustomLableModel.elective_group,
      elective_group_plural: this.settingsCustomLableModel.elective_group_plural,

      subject_group: this.settingsCustomLableModel.subject_group,
      subject_group_plural: this.settingsCustomLableModel.subject_group_plural,

      module_chapter: this.settingsCustomLableModel.module_chapter,
      module_chapter_plural: this.settingsCustomLableModel.module_chapter_plural,

      topics_skills: this.settingsCustomLableModel.topics_skills,
      topics_skills_plural: this.settingsCustomLableModel.topics_skills_plural,
    });
  }

  getCustomLabels(): void {
    this._settingService.getCustomLabels(this.instituteID).subscribe(
      res => {
        this.settingsCustomLableModel = res;
        this.updateDate();
      }, err => {

      }, () => {

      }
    );
  }
  updateMenuVal(): void {

    const instVal: InstitutionModel = JSON.parse(localStorage.getItem(AppConfig.institution));
    // console.log(instVal.customLabels);
    // console.log(this.customLabelsForm.value);
    instVal.customLabels = this.customLabelsForm.value;
    localStorage.setItem(AppConfig.institution, JSON.stringify(instVal));
    this._customLabelsUpdateService.sendMessage('up');
  }
  onClickUpdatingServer(): void {
    if (this.customLabelsForm.valid) {
      this._settingService.updateCustomLabels(this.instituteID, this.customLabelsForm.value).subscribe(
        res => {
          this._matSnackBar.open(AppConfig.updateDone, AppConfig.snackBarOk, {
            duration: AppConfig.snackBarDuration
          });

          this.updateMenuVal();

        }, err => {
          this._matSnackBar.open(err, AppConfig.snackBarOk, {
            duration: AppConfig.snackBarDuration
          });
        }, () => {

        }
      );
    } else {
      this._matSnackBar.open(AppConfig.fillAll, AppConfig.snackBarOk, {
        duration: AppConfig.snackBarDuration
      });
    }
  }

}
