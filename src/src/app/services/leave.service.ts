import { Injectable } from '@angular/core';
import { leave } from '../model/leave.module';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  getLeave():leave[]{
    return[
        {
          reason:"Sick",
          status:"pending",
          date:"20 aug 2021",
          managerName:"Sapan kumar",
          userName:"chandragupt"
            
        },
        {
          reason:"Sick",
          status:"reject",
          date:"20 aug 2021",
          managerName:"Vijay Kumar",
          userName:"Sagar Nag"
            
        },
        {
          reason:"Sick",
          status:"approve",
          date:"20 aug 2021",
          managerName:"Rahul kumar",
          userName:"Sonu"
            
        },


    ]

}

  constructor() { }
}
