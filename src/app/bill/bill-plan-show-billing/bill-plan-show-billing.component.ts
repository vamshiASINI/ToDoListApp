import { AppConfig } from './../../appConfig';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../auth/services/auth.service';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { PlanInfoModel } from '../models/plan-info-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlanPriceResponseModel } from '../models/plan-price-response-model';
import { BillService } from '../bill.service';
import { BillPromoCodeModel } from '../models/bill-promo-code-model';
import { BillAddressInstitution } from '../models/bill-address-institution';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-plan-show-billing',
  templateUrl: './bill-plan-show-billing.component.html',
  styleUrls: ['./bill-plan-show-billing.component.scss']
})
export class BillPlanShowBillingComponent implements OnInit, OnChanges {
  sendingToServer = false;
  currency;
  userUUID;
  coupon = '';
  couponAdded = false;
  couponRes = new BillPromoCodeModel();
  plan = new FormControl('');
  student = new FormControl('', [Validators.required]);
  emp = new FormControl('');
  promo = new FormControl('');
  institutionFormVal = new FormControl('');
  licenceAdd = new FormControl('');
  billingAdd = new FormControl('');
  billForm = new FormGroup({
    plan: this.plan,
    student: this.student,
    emp: this.emp,
    promo: this.promo,
    institution: this.institutionFormVal,
    licenceAdd: this.licenceAdd,
    billingAdd: this.billingAdd,
  });

  currentSelectedPlanPrice: PlanPriceResponseModel;
  totalStudentbill = 0;
  totalEmpBill = 0;
  subTotal = 0;
  total = 0;
  billAmountWithCoupon = 0;
  taxTotal = 0;
  taxAplicabe = false;
  taxAplicabeGst = false;
  grossTotal = 0;
  errorPassword: string;

  @Input() planSetValueIs: PlanInfoModel;
  @Input() addressInstitutionBillingSelected: BillAddressInstitution;
  @Input() addressInstitutionLicenseSelected: BillAddressInstitution;
  constructor(private _authService: AuthService, private _billService: BillService, private _matSnackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    this.currency = this._authService.getCurrentInstCurrency();
    this.userUUID = this._authService.getUserUUID();
  }

  billSetup(): void {

    this.currentSelectedPlanPrice = this.planSetValueIs.price[0];

    this.billForm.patchValue({
      plan: this.planSetValueIs.price[0].id,
    });
    this.subTotalBill();
  }
  updateBill(): void {
    console.log('me');
    if (this.currentSelectedPlanPrice) {
      this.totalStudentbill = this.billForm.get('student').value * (this.currentSelectedPlanPrice.lstudents - (this.currentSelectedPlanPrice.lstudents * (this.currentSelectedPlanPrice.discount / 100)));
      this.subTotal = this.totalStudentbill;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.planSetValueIs.currentValue);
    if (changes.planSetValueIs) {
      this.couponAdded = false;
      this.billSetup();
    }
    if (changes.addressInstitutionBillingSelected) {
      this.billSetup();
    }
  }

  onStudentChange(): void {
    this.couponAdded = false;
    this.subTotalBill();
  }
  onEmpChange(): void {
    this.couponAdded = false;
    this.subTotalBill();
  }
  onPlanChange(valIS): void {
    this.couponAdded = false;
    this.currentSelectedPlanPrice = this.planSetValueIs.price.find(e => e.id === valIS.value);
    this.subTotalBill();
  }

  subTotalBill(): void {
    const totalStudent = this.billForm.get('student').value;
    const totalEmp = this.billForm.get('emp').value;
    const studentPrice = this.currentSelectedPlanPrice.lstudents;
    const empPrice = this.currentSelectedPlanPrice.lemployees;
    const billDiscount = this.currentSelectedPlanPrice.discount;


    this.totalStudentbill = totalStudent * (studentPrice - (studentPrice * (billDiscount / 100)));
    this.totalEmpBill = totalEmp * (empPrice - (empPrice * (billDiscount / 100)));
    this.subTotal = this.totalStudentbill + this.totalEmpBill;

    if (this.couponAdded) {
      // console.log(this.couponRes);
      // this.total = this.totalStudentbill + this.totalEmpBill;
      const price = this.couponRes;
      // if (this.couponRes.upperlimit >= totalStudent){
      const billAmountWithoutCoupon = (totalStudent * (studentPrice - (studentPrice * (billDiscount / 100))));
      const billAmountWithCoupon = (this.couponRes.upperlimit * (studentPrice - (studentPrice * (billDiscount / 100))));
      this.billAmountWithCoupon = billAmountWithCoupon;
      const totalStudentbill2 = billAmountWithoutCoupon - billAmountWithCoupon;
      this.total = totalStudentbill2 + this.totalEmpBill;
      //  }else
    } else {
      // couponRes
      this.billAmountWithCoupon = 0;
      this.total = this.totalStudentbill + this.totalEmpBill;
    }

    // tax
    if (this.addressInstitutionBillingSelected.country_id === 2) {
      this.taxAplicabe = true;
      this.taxTotal = this.total * 0.18;
    } else {
      this.taxAplicabe = false;
      this.taxTotal = 0;
    }

    if (this.addressInstitutionBillingSelected.state_id === 11) {
      this.taxAplicabeGst = true;
    } else {
      this.taxAplicabeGst = false;
    }

    this.grossTotal = this.total + this.taxTotal;
  }
  promoCodeBill(): void {
    this.couponAdded = true;
    this.subTotalBill();
  }
  checkCouponRemove(): void {
    this.couponAdded = false;
    this.subTotalBill();
  }
  placeMyOrder(): void {
    let couponVal = '';
    if (this.couponAdded) {

      if (this.coupon.length) {
        couponVal = this.coupon;
      } else {
        couponVal = null;
      }

    } else {
      couponVal = null;
    }
    if (!this.emp.value) {
      this.emp.setValue(0);
    }
    this.billForm.patchValue({
      promo: couponVal,
      institution: this._authService.getCurrentInstId(),
      licenceAdd: this.addressInstitutionLicenseSelected.id,
      billingAdd: this.addressInstitutionBillingSelected.id,
    });

    if (this.billForm.valid) {
      // console.log(this.billForm.value);
      this.sendingToServer = true;
      this._billService.makeBillOfInstitution(this.billForm.value).subscribe(
        res => {
          // console.log(res);
          this.sendingToServer = false;
          this.updateUserBill();
        }, err => {
          this.sendingToServer = false;
        }, () => {

        }
      );
    } else {
      this._matSnackBar.open('You must enter Number of Student', 'ok', {
        duration: AppConfig.snackBarDuration
      });
    }
    // console.log(this.billForm.value);
  }
  updateUserBill(): void {
    this._matSnackBar.open('Bill Paid', AppConfig.snackBarOk, {
      duration: AppConfig.snackBarDuration
    });
    if (this._authService.isUserOnboarding) {
      this._authService.updateOnUserOnboardingDone();
      this._router.navigate([environment.generalSettings]);
    }
  }
  getErrorStudent() {

    return this.student.hasError('required')
      ? 'You must enter Number of Student'
      : this.errorPassword;
  }

  checkCoupon(): void {

    this._billService.getPromoCode(this.coupon, this.userUUID, this.currentSelectedPlanPrice.id, this.student.value, this.emp.value).subscribe(
      res => {

        this.couponRes = res;
        this.promoCodeBill();
        this._matSnackBar.open(AppConfig.appledPromoCode, AppConfig.snackBarOk, {
          duration: AppConfig.snackBarDuration,
        });
      }, err => {
        this._matSnackBar.open(err.error.error, AppConfig.snackBarOk, {
          duration: AppConfig.snackBarDuration,
        });

      }, () => {

      }
    );

  }
}
