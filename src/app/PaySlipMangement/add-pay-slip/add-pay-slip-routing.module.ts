import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPaySlipPage } from './add-pay-slip.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaySlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPaySlipPageRoutingModule {}
