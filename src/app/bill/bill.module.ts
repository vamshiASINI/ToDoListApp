import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillOnboardingComponent } from './bill-onboarding/bill-onboarding.component';
import { PurchaseServicesComponent } from './purchase-services/purchase-services.component';
import { YourProductsComponent } from './your-products/your-products.component';
import { BillsPaymentsComponent } from './bills-payments/bills-payments.component';
import { BillsAccountsComponent } from './bills-accounts/bills-accounts.component';
import { BillNotificationsComponent } from './bill-notifications/bill-notifications.component';
import { BillLicensesComponent } from './bill-licenses/bill-licenses.component';
import { BillPlanShowComponent } from './bill-plan-show/bill-plan-show.component';
import { BillPlanShowBillingComponent } from './bill-plan-show-billing/bill-plan-show-billing.component';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BillAddressInstitutionComponent } from './bill-address-institution/bill-address-institution.component';



@NgModule({
  declarations: [
    BillOnboardingComponent,
    PurchaseServicesComponent,
    YourProductsComponent, BillsPaymentsComponent,
    BillsAccountsComponent, BillNotificationsComponent, BillLicensesComponent, BillPlanShowComponent, BillPlanShowBillingComponent, BillAddressInstitutionComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BillModule { }
