import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavePageRoutingModule } from './leave-routing.module';

import { LeavePage } from './leave.page';
import { AddLeavePageModule } from '../add-leave/add-leave.module';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavePageRoutingModule,
    AddLeavePageModule,
    BreadcrumbsModule,
    HeaderModule
  ],
  declarations: [LeavePage]
})
export class LeavePageModule {}
