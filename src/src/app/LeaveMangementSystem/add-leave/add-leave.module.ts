import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeavePageRoutingModule } from './add-leave-routing.module';

import { AddLeavePage } from './add-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLeavePageRoutingModule
  ],
  declarations: [AddLeavePage]
})
export class AddLeavePageModule {}
