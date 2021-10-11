import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./AttendanceMangement/attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./EmployeeMangement/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./LeaveMangementSystem/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'pay-slip',
    loadChildren: () => import('./PaySlipMangement/pay-slip/pay-slip.module').then( m => m.PaySlipPageModule)
  },
  {
    path: 'pay-slip-summary',
    loadChildren: () => import('./PaySlipMangement/pay-slip-summary/pay-slip-summary.module').then( m => m.PaySlipSummaryPageModule)
  },
  {
    path: 'add-leave',
    loadChildren: () => import('./LeaveMangementSystem/add-leave/add-leave.module').then( m => m.AddLeavePageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
