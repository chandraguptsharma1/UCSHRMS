import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../components/header/header.module';



const routes: Routes=[
  {
    path:'',
    component: HomePage

  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule
    
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
