import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeavePageRoutingModule } from './add-leave-routing.module';

import { AddLeavePage } from './add-leave.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLeavePageRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [AddLeavePage]
})
export class AddLeavePageModule {}
