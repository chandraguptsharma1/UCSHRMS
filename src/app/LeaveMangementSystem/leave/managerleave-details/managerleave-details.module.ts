import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerleaveDetailsPageRoutingModule } from './managerleave-details-routing.module';

import { ManagerleaveDetailsPage } from './managerleave-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerleaveDetailsPageRoutingModule
  ],
  declarations: [ManagerleaveDetailsPage]
})
export class ManagerleaveDetailsPageModule {}
