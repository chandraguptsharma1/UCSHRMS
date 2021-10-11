import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

 // API path
 base_path = 'http://49.50.69.37:8080/HRMSServices/add-leaverequest';

 constructor(private http: HttpClient) { }

 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }

  // // Create a new item
  // createItem(item): Observable<leave> {
  //   return this.http
  //     .post<leave>(this.base_path, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }
}
