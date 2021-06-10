import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillService } from './../bill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-onboarding',
  templateUrl: './bill-onboarding.component.html',
  styleUrls: ['./bill-onboarding.component.scss']
})
export class BillOnboardingComponent implements OnInit {
  waitForSubmit;
  countryVal = 'IN';
  trial = false;
  currencySymbol = 'Rs';


  discountPercentPromo;
  formPromoCode = new FormControl('');

  billForm = new FormGroup({
    promoStep3: this.formPromoCode,
  });

  constructor(private _billService: BillService) { }

  ngOnInit(): void {
    this.getPlanInfoForOnboarding();
  }
  getPlanInfoForOnboarding(): void {
    /*this._billService.getUserPlanForOnBoarding().subscribe(
      res => {
        // console.log(res);

      }, err => {

      }, () => {

      }
    );*/
  }
}
