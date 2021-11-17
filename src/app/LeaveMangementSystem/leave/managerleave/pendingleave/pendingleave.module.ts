import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingleavePageRoutingModule } from './pendingleave-routing.module';

import { PendingleavePage } from './pendingleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingleavePageRoutingModule
  ],
  declarations: [PendingleavePage]
})
export class PendingleavePageModule {}
