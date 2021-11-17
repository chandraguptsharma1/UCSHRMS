import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectleavePageRoutingModule } from './rejectleave-routing.module';

import { RejectleavePage } from './rejectleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectleavePageRoutingModule
  ],
  declarations: [RejectleavePage]
})
export class RejectleavePageModule {}
