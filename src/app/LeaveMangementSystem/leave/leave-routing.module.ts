import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeavePage } from './leave.page';

const routes: Routes = [
  {
    path: '',
    component: LeavePage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'managerleave',
            loadChildren: () => import('../leave/managerleave/managerleave.module').then( m => m.ManagerleavePageModule)
          },
          {
            path: 'userleave',
            loadChildren: () => import('../leave/userleave/userleave.module').then( m => m.UserleavePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '../leave/managerleave',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavePageRoutingModule {}
