import { AuthService } from 'src/app/auth/services/auth.service';
import { BillService } from './../bill.service';
import { Component, OnInit } from '@angular/core';
import { PlanInfoModel } from '../models/plan-info-model';
import { BillAddressInstitution } from '../models/bill-address-institution';
import { AppConfig } from 'src/app/appConfig';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-purchase-services',
  templateUrl: './purchase-services.component.html',
  styleUrls: ['./purchase-services.component.scss']
})
export class PurchaseServicesComponent implements OnInit {
  planSetValueIs: PlanInfoModel;

  addressInstitutionBilling: BillAddressInstitution[] = [];
  addressInstitutionBillingSelected: BillAddressInstitution;
  addressInstitutionLicense: BillAddressInstitution[] = [];
  addressInstitutionLicenseSelected: BillAddressInstitution;
  constructor(private _billService: BillService, private _auth: AuthService, private _matSnackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    this.getAllAddress();
  }
  getAllAddress(): void {
    this._billService.getAllAddress().subscribe(
      res => {
        // console.log(res);
        res.forEach(element => {
          this.addressInstitutionBilling.push(Object.assign({}, element));
          this.addressInstitutionLicense.push(Object.assign({}, element));
        });

        // console.log(this.addressInstitutionBilling);
        // console.log(this.addressInstitutionLicense);
      }, err => {

      }, () => {

      }
    );
  }

  planTrialPurchase(planInfo): void {
    // console.log(planInfo);
    // console.log('isTryPurchase');
    planInfo.inst = this._auth.getCurrentInstId();
    this._billService.makeTryBillOfInstitution(planInfo).subscribe(
      res => {
        // console.log(res);
        this.updateUserBill();
      }, err => {

      }, () => {

      }
    );
  }
  updateUserBill(): void {
    this._matSnackBar.open('Trial Active', AppConfig.snackBarOk, {
      duration: AppConfig.snackBarDuration
    });
    if (this._auth.isUserOnboarding) {
      this._auth.updateOnUserOnboardingDone();
      this._router.navigate([environment.generalSettings]);
    }
  }

  planSetSelectedForPurchase(valIs): void {
    // console.log(valIs);
    this.planSetValueIs = valIs;
  }
  selectedLicenseAddress(valis): void {
    console.log('lic valis');
  }
  selectedBillingAddress(valis): void {
    console.log('bill valis');
  }

  onClickSelectAddressLic(pos: number): void {
    this.addressInstitutionLicense.forEach(element => {
      element.selected = false;
    });
    // console.log('Lic valis', pos);
    this.addressInstitutionLicense[pos].selected = true;
    this.addressInstitutionLicenseSelected = this.addressInstitutionLicense[pos];
  }
  onClickSelectAddressBill(pos: number): void {
    this.addressInstitutionBilling.forEach(element => {
      element.selected = false;
    });
    //  console.log('bill valis', pos);
    this.addressInstitutionBilling[pos].selected = true;
    this.addressInstitutionBillingSelected = this.addressInstitutionBilling[pos];
  }
}
