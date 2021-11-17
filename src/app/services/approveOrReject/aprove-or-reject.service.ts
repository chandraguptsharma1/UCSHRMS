import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApproveOrReject } from 'src/app/model/approveOrreject/approve/reject.module';
import { LeaveId } from 'src/app/model/getLeaveId/getleaveId.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AproveOrRejectService {
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  approveRequest(role:any,approveOrReject:ApproveOrReject){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post<ApproveOrReject>(`${this.Api_url}cancelrequest`+'/'+role,approveOrReject,{ 'headers': headers });
  }

  cancel(id:any){
    // const headers= new HttpHeaders()
    // .set('content-type', 'application/json')
      return this.http.get(`${this.Api_url}cancel`+'/'+id);

  }
}
