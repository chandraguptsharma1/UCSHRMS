import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerleavePage } from './managerleave.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerleavePage,
    children:[
      {
        path:'pendingleave',
        loadChildren: () => import('../managerleave/pendingleave/pendingleave.module').then( m => m.PendingleavePageModule)
      },
      {
        path:'rejectleave',
        loadChildren: () => import('../managerleave/rejectleave/rejectleave.module').then( m => m.RejectleavePageModule)
      },
      {
        path:'approveleave',
        loadChildren: () => import('../managerleave/approveleave/approveleave.module').then( m => m.ApproveleavePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerleavePageRoutingModule {}
