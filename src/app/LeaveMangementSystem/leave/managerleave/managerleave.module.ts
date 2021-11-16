import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerleavePageRoutingModule } from './managerleave-routing.module';

import { ManagerleavePage } from './managerleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerleavePageRoutingModule
  ],
  declarations: [ManagerleavePage]
})
export class ManagerleavePageModule {}
