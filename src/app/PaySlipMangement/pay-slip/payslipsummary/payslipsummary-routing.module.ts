import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayslipsummaryPage } from './payslipsummary.page';

const routes: Routes = [
  {
    path: '',
    component: PayslipsummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayslipsummaryPageRoutingModule {}
