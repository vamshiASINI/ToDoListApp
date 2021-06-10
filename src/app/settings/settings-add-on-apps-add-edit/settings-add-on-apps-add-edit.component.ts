import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SettingService } from '../setting.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfig } from '../../appConfig';
import { SettingsAddOnAppsLinkModel } from '../models/settings-add-on-apps-link-model';

@Component({
  selector: 'app-settings-add-on-apps-add-edit',
  templateUrl: './settings-add-on-apps-add-edit.component.html',
  styleUrls: ['./settings-add-on-apps-add-edit.component.scss']
})
export class SettingsAddOnAppsAddEditComponent implements OnInit {
  settingsAddOnAppsLink: SettingsAddOnAppsLinkModel;
  editForm = false;
  instituteID = 0;
  serverWait = false;
  application_name = new FormControl('', [Validators.required]);
  redirect_URL = new FormControl('', [Validators.required]);
  institution_id = new FormControl('');
  is_active = new FormControl(true);

  appLinkForm = new FormGroup({
    application_name: this.application_name,
    redirect_URL: this.redirect_URL,
    institution_id: this.institution_id,
    is_active: this.is_active,
  });
  constructor(public dialogRef: MatDialogRef<SettingsAddOnAppsAddEditComponent>, private _matSnackBar: MatSnackBar, private _authService: AuthService, private _settingService: SettingService, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.updateForm();
    this.instituteID = this._authService.getCurrentInstId();
    this.appLinkForm.patchValue({
      institution_id: this.instituteID,
    });
  }
  updateForm(): void {
    this.editForm = this.data.edit;
    if (this.editForm) {
      this.settingsAddOnAppsLink = this.data.info;
      this.appLinkForm.patchValue({
        application_name: this.settingsAddOnAppsLink.application_name,
        redirect_URL: this.settingsAddOnAppsLink.redirect_URL,
        institution_id: this.settingsAddOnAppsLink.institution_id,
        is_active: this.settingsAddOnAppsLink.is_active,
      });
    }
  }
  onClickAdd(): void {
    if (this.appLinkForm.valid) {
      this._settingService.addOnAppsLinkAdd(this.instituteID, this.appLinkForm.value).subscribe(
        res => {
          this._matSnackBar.open(AppConfig.addedDone, AppConfig.snackBarOk, {
            duration: AppConfig.snackBarDuration
          });
          this.settingsAddOnAppsLink = res;
          this.dialogRef.close({
            success: true,
            info: this.settingsAddOnAppsLink
          });
        }, err => {
          this._matSnackBar.open(err, AppConfig.snackBarOk, {
            duration: AppConfig.snackBarDuration
          });
        }, () => {

        }
      );
    }
  }

  onClickUpdate(): void {
    if (this.appLinkForm.valid) {
      this._settingService.updateAppsLinkAdd(this.instituteID, this.settingsAddOnAppsLink.id, this.appLinkForm.value).subscribe(
        res => {
          this.settingsAddOnAppsLink = res;
          this.dialogRef.close({
            success: true,
            info: this.settingsAddOnAppsLink
          });
        }, err => {
          this._matSnackBar.open(err, AppConfig.snackBarOk, {
            duration: AppConfig.snackBarDuration
          });
        }, () => {

        }
      );
    }
  }
}
