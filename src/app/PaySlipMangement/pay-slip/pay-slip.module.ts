import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaySlipPageRoutingModule } from './pay-slip-routing.module';

import { PaySlipPage } from './pay-slip.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaySlipPageRoutingModule,
    HeaderModule,
    BreadcrumbsModule
  ],
  declarations: [PaySlipPage]
})
export class PaySlipPageModule {}
