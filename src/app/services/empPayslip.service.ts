import { Injectable } from '@angular/core';
import { EmpSlip } from '../model/empPayslip.module';


@Injectable({
  providedIn: 'root'
})
export class EmpPayslipService {

  paySlip:EmpSlip[]=[
    {
      id:'p1',
      month:'january',
      imageUrl:'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png',
      Salary:50000

    },
    {
     id:'p2',
     month:'Feb',
     imageUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png',
     Salary:50000
   },
  ]
  getEmpPaySlip():EmpSlip[]{
    return[...this.paySlip ]}

  getPayslips(payId:String ){
      return {
        ... this.paySlip.find(pays=>
          {
             return pays.id===payId;
          }
      )};
  }

  
}
