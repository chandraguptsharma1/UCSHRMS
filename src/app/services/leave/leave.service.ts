import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveId } from 'src/app/model/getLeaveId/getleaveId.module';
import { leave } from 'src/app/model/leave.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private Api_url = environment.baseUrl

  constructor(private http: HttpClient) { }

  leave(userDetails:leave){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.post<leave>(`${this.Api_url}add-leaverequest`,userDetails,{ 'headers': headers });
  }

  getleave(empId:any){
    return this.http.get<leave>(`${this.Api_url}all-leaverequest`+"/"+empId);
  }

  getleaveById(leaveid:LeaveId){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post<LeaveId>(`${this.Api_url}getLeaveDetails`,leaveid,{ 'headers': headers });
   }

   getLeaveManager(){
    return this.http.get<leave>(`${this.Api_url}managerLeaveRequest`);
   }
}

