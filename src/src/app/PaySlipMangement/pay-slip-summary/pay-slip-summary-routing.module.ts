import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaySlipSummaryPage } from './pay-slip-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PaySlipSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaySlipSummaryPageRoutingModule {}
