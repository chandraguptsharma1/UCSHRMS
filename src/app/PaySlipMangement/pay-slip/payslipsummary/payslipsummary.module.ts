import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayslipsummaryPageRoutingModule } from './payslipsummary-routing.module';

import { PayslipsummaryPage } from './payslipsummary.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';

import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/theme/macarons.js';
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayslipsummaryPageRoutingModule,
    HeaderModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  declarations: [PayslipsummaryPage]
})
export class PayslipsummaryPageModule {}
