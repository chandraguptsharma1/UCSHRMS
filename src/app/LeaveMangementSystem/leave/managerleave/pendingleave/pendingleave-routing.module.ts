import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingleavePage } from './pendingleave.page';

const routes: Routes = [
  {
    path: '',
    component: PendingleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingleavePageRoutingModule {}
