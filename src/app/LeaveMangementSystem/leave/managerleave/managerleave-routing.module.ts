import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerleavePage } from './managerleave.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerleavePageRoutingModule {}
