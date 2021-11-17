import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectleavePage } from './rejectleave.page';

const routes: Routes = [
  {
    path: '',
    component: RejectleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectleavePageRoutingModule {}
