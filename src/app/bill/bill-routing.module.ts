import { BillOnboardingComponent } from './bill-onboarding/bill-onboarding.component';
import { BillNotificationsComponent } from './bill-notifications/bill-notifications.component';
import { BillsAccountsComponent } from './bills-accounts/bills-accounts.component';
import { BillsPaymentsComponent } from './bills-payments/bills-payments.component';
import { BillLicensesComponent } from './bill-licenses/bill-licenses.component';
import { PurchaseServicesComponent } from './purchase-services/purchase-services.component';
import { YourProductsComponent } from './your-products/your-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: YourProductsComponent
  }, {
    path: 'purchase-services',
    component: PurchaseServicesComponent,
  }, {
    path: 'licenses',
    component: BillLicensesComponent,
  }, {
    path: 'bills-payments',
    component: BillsPaymentsComponent,
  }, {
    path: 'billing-accounts',
    component: BillsAccountsComponent,
  }, {
    path: 'billing-notifications',
    component: BillNotificationsComponent
  }, {
    path: 'billing-onboarding',
    component: BillOnboardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
