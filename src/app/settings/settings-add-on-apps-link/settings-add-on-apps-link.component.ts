import { AppConfig } from 'src/app/appConfig';
import { SettingsAddOnAppsDeleteComponent } from './../settings-add-on-apps-delete/settings-add-on-apps-delete.component';
import { SettingsAddOnAppsAddEditComponent } from './../settings-add-on-apps-add-edit/settings-add-on-apps-add-edit.component';
import { SettingService } from './../setting.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SettingsAddOnAppsLinkModel } from '../models/settings-add-on-apps-link-model';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings-add-on-apps-link',
  templateUrl: './settings-add-on-apps-link.component.html',
  styleUrls: ['./settings-add-on-apps-link.component.scss']
})
export class SettingsAddOnAppsLinkComponent implements OnInit {
  instituteID = 0;
  settingsAddOnAppsLinkList: SettingsAddOnAppsLinkModel[];


  constructor(private _authService: AuthService, private _settingService: SettingService, public _dialog: MatDialog, private _matSnackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.instituteID = this._authService.getCurrentInstId();
    this.addOnAppsLinkList();
  }

  addOnAppsLinkList(): void {
    this._settingService.addOnAppsLinkList(this.instituteID).subscribe(
      res => {
        // console.log(res);
        this.settingsAddOnAppsLinkList = res;
      }, err => {

      }, () => {

      }
    );

  }
  onClickAdd(): void {
    const dialogRef = this._dialog.open(SettingsAddOnAppsAddEditComponent, {
      // width: '250px',
      // minWidth: '250pt',
      data: { edit: false }
    });

    dialogRef.afterClosed().subscribe(result => {

      // console.log(result);

      if (result.success) {
        // this.settingsAddOnAppsLinkList.splice(0, result.info);
        this.settingsAddOnAppsLinkList.push(result.info);
      }

    });
  }
  onClickOnEdit(pos: number): void {
    const dialogRef = this._dialog.open(SettingsAddOnAppsAddEditComponent, {
      // width: '250px',
      // minWidth: '250pt',
      data: { edit: true, info: this.settingsAddOnAppsLinkList[pos] }
    });

    dialogRef.afterClosed().subscribe(result => {

      // console.log(result);

      if (result.success) {
        // this.settingsAddOnAppsLinkList.splice(0, result.info);
        this.settingsAddOnAppsLinkList[pos].application_name = result.info.application_name;
        this.settingsAddOnAppsLinkList[pos].redirect_URL = result.info.redirect_URL;
      }

    });
  }

  onClickOnDelete(pos: number): void {
    // console.log(pos);
    const dialogRef = this._dialog.open(SettingsAddOnAppsDeleteComponent, {
      // width: '250px',
      // minWidth: '250pt',
      data: { name: this.settingsAddOnAppsLinkList[pos].application_name }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        this._settingService.deleteAppsLinkAdd(this.instituteID, this.settingsAddOnAppsLinkList[pos].id).subscribe(
          res => {
            this.settingsAddOnAppsLinkList.splice(pos, 1);
            this._matSnackBar.open(AppConfig.deleteDone, AppConfig.snackBarOk, {
              duration: AppConfig.snackBarDuration
            });
          }, err => {
            this._matSnackBar.open(err, AppConfig.snackBarOk, {
              duration: AppConfig.snackBarDuration
            });
          }, () => {

          }
        );
      }

    });
  }
}

