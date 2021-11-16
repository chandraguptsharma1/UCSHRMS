import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerleaveDetailsPage } from './managerleave-details.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerleaveDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerleaveDetailsPageRoutingModule {}
