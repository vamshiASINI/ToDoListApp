import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';
import { GeneralSettingsModel } from '../models/general-settings-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillAddressInstitution } from 'src/app/bill/models/bill-address-institution';
import { GlobalCountryModel } from '../models/global-country-model';
import { InstituteTypeGlobalModel } from '../models/institute-type-global-model';
import { GlobaldaysOfWeekModel } from '../models/globaldays-of-week-model';
import { GlobalDateFormateModel } from '../models/global-date-formate-model';
import { GlobalLanguageCodeModel } from '../models/global-language-code-model';
import { GlobalTimeZoneModel } from '../models/global-time-zone-model';
import { GlobalCurrencyModel } from '../models/global-currency-model';
import { AppConfig } from '../../appConfig';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  instObj: GeneralSettingsModel;
  instObjAddress: BillAddressInstitution[];
  countryList: GlobalCountryModel[];
  instituteTypeGlobal: InstituteTypeGlobalModel[] = [];
  daysOfWeek: GlobaldaysOfWeekModel[];
  globalDateFormate: GlobalDateFormateModel[];
  languageCode: GlobalLanguageCodeModel[];
  timeZone: GlobalTimeZoneModel[];
  currency: GlobalCurrencyModel[];
  institutionId = 0;

  name = new FormControl('', [Validators.required]);
  phone_dialing_code_id = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  www_url = new FormControl('');
  date_format_id = new FormControl('')
  institution_type_global_id = new FormControl('', [Validators.required]);
  start_day_of_the_week = new FormControl('');
  language_id = new FormControl('');
  time_zone_id = new FormControl('');
  country_id = new FormControl({ value: '', disabled: true });
  currency_id = new FormControl('');
  student_admission_auto = new FormControl('');
  prefix_counter_employee = new FormControl('');
  enable_auto_employee = new FormControl('');

  prefix_counter_student = new FormControl('');
  enable_auto_student = new FormControl('');
  enable_sibling = new FormControl('');
  enable_roll_number_for_student = new FormControl('');
  instForm = new FormGroup({
    name: this.name,
    phone_dialing_code_id: this.phone_dialing_code_id,
    phone: this.phone,
    email: this.email,
    www_url: this.www_url,
    institution_type_global_id: this.institution_type_global_id,
    start_day_of_the_week: this.start_day_of_the_week,
    date_format_id: this.date_format_id,
    language_id: this.language_id,
    time_zone_id: this.time_zone_id,
    country_id: this.country_id,
    currency_id: this.currency_id,
    student_admission_auto: this.student_admission_auto,
    prefix_counter_employee: this.prefix_counter_employee,
    enable_auto_employee: this.enable_auto_employee,

    prefix_counter_student: this.prefix_counter_student,
    enable_auto_student: this.enable_auto_student,
    enable_sibling: this.enable_sibling,
    enable_roll_number_for_student: this.enable_roll_number_for_student
  });
  updatingServer = false;
  constructor(private _settingService: SettingService, private _auth: AuthService, private _matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.institutionId = this._auth.getCurrentInstId();
    this.getAllPlanByUser();
  }
  updateData(): void {

    this.instForm.patchValue({
      prefix_counter_student: this.instObj.prefix_counter_student,
      enable_auto_student: this.instObj.enable_auto_student,
      enable_sibling: this.instObj.enable_sibling,
      enable_roll_number_for_student: this.instObj.enable_roll_number_for_student,

      prefix_counter_employee: this.instObj.prefix_counter_employee,
      enable_auto_employee: this.instObj.enable_auto_employee,

      name: this.instObj.name,
      phone: this.instObj.phone,
      phone_dialing_code_id: this.instObj.phone_dialing_code_id,
      email: this.instObj.email,
      www_url: this.instObj.www_url,
      institution_type_global_id: this.instObj.institution_type_global_id,
      start_day_of_the_week: this.instObj.start_day_of_the_week,
      date_format_id: this.instObj.date_format_id,
      language_id: this.instObj.language_id,
      time_zone_id: this.instObj.time_zone_id,
      country_id: this.instObj.country_id,
      currency_id: this.instObj.currency_id,
      student_admission_auto: this.instObj.student_admission_auto,
    });
    console.log(this.instForm.value);
  }
  getAllPlanByUser(): void {
    this._settingService.getInstitteSetting(this.institutionId).subscribe(
      res => {
        // console.log(res);
        this.instObj = res.info;
        this.instObjAddress = res.address;
        this.countryList = res.country;
        this.instituteTypeGlobal = res.instituteTypeGlobal;
        this.daysOfWeek = res.dayOfWeek;
        this.globalDateFormate = res.dateFormat;
        this.languageCode = res.languageCode;
        this.timeZone = res.timeZone;
        this.currency = res.currency;
        this.updateData();
      }, err => {

      }, () => {

      }
    );

  }
  updateFrom(): void {
    if (this.instForm.valid) {
      this.updatingServer = true;
      this._settingService.updateInstitteSetting(this.institutionId, this.instForm.value).subscribe(
        res => {
          console.log(res);
          this.updatingServer = false;
        }, err => {
          this.updatingServer = false;

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
