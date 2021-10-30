import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDayAttendancePageRoutingModule } from './add-day-attendance-routing.module';

import { AddDayAttendancePage } from './add-day-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDayAttendancePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddDayAttendancePage]
})
export class AddDayAttendancePageModule {}
