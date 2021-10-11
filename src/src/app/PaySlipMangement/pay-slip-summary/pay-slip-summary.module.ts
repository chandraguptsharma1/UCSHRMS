import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaySlipSummaryPageRoutingModule } from './pay-slip-summary-routing.module';

import { PaySlipSummaryPage } from './pay-slip-summary.page';
import { Chart } from 'chart.js';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaySlipSummaryPageRoutingModule,
    
  ],
  declarations: [PaySlipSummaryPage]
})
export class PaySlipSummaryPageModule {}
