import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    HeaderModule,
    BreadcrumbsModule
    
  ],
  declarations: [EmployeePage]
})
export class EmployeePageModule {}
