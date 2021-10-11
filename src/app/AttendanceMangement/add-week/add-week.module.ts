import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWeekPageRoutingModule } from './add-week-routing.module';

import { AddWeekPage } from './add-week.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWeekPageRoutingModule
  ],
  declarations: [AddWeekPage]
})
export class AddWeekPageModule {}
