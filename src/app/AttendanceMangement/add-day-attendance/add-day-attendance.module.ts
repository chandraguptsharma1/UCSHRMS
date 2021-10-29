import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDayAttendancePageRoutingModule } from './add-day-attendance-routing.module';

import { AddDayAttendancePage } from './add-day-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDayAttendancePageRoutingModule
  ],
  declarations: [AddDayAttendancePage]
})
export class AddDayAttendancePageModule {}
