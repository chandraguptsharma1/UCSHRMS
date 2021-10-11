import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayslipsummaryPageRoutingModule } from './payslipsummary-routing.module';

import { PayslipsummaryPage } from './payslipsummary.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayslipsummaryPageRoutingModule,
    HeaderModule
  ],
  declarations: [PayslipsummaryPage]
})
export class PayslipsummaryPageModule {}
