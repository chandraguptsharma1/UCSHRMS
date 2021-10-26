import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'employee',
    loadChildren: () => import('./EmployeeMangement/employee/employee.module').then( m => m.EmployeePageModule)

    
  },
  {
    path: 'update-employee-details/:id',
    loadChildren: () => import('./EmployeeMangement/update-employee/update-employee.module').then( m => m.UpdateEmployeePageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./LeaveMangementSystem/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path:'attendance',
    loadChildren: () => import('./AttendanceMangement/attendance/attendance.module').then( m => m.AttendancePageModule)

  },
  {

    path: 'pay-slip',
    children:[
      {
        path:"",
        loadChildren: () => import('./PaySlipMangement/pay-slip/pay-slip.module').then( m => m.PaySlipPageModule)

      },
      {
        path: ':payId',
        loadChildren: () => import('./PaySlipMangement/pay-slip/payslipsummary/payslipsummary.module').then( m => m.PayslipsummaryPageModule)
      },
    ]
    
  },
 
  {
    path: 'add-leave',
    loadChildren: () => import('./LeaveMangementSystem/add-leave/add-leave.module').then( m => m.AddLeavePageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./auth/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'add-pay-slip',
    loadChildren: () => import('./PaySlipMangement/add-pay-slip/add-pay-slip.module').then( m => m.AddPaySlipPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./EmployeeMangement/add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  
  
  
  {
    path: 'attendId',
    loadChildren: () => import('./AttendanceMangement/attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'leave-details/:id',
    loadChildren: () => import('./LeaveMangementSystem/leave-details/leave-details.module').then( m => m.LeaveDetailsPageModule)
  },

  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
