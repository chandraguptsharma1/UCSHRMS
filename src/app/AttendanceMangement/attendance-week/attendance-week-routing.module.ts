import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceWeekPage } from './attendance-week.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceWeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceWeekPageRoutingModule {}
