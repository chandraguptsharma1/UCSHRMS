import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPaySlipPageRoutingModule } from './add-pay-slip-routing.module';

import { AddPaySlipPage } from './add-pay-slip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPaySlipPageRoutingModule
  ],
  declarations: [AddPaySlipPage]
})
export class AddPaySlipPageModule {}
