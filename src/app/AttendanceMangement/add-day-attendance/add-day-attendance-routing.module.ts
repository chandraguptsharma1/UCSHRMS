import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDayAttendancePage } from './add-day-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: AddDayAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDayAttendancePageRoutingModule {}
