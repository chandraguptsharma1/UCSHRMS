import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceWeekPageRoutingModule } from './attendance-week-routing.module';

import { AttendanceWeekPage } from './attendance-week.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceWeekPageRoutingModule,
    HeaderModule,
    BreadcrumbsModule
    
  ],
  declarations: [AttendanceWeekPage]
})
export class AttendanceWeekPageModule {}
