import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWeekPage } from './add-week.page';

const routes: Routes = [
  {
    path: '',
    component: AddWeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWeekPageRoutingModule {}
