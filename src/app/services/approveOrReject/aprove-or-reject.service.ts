import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApproveOrReject } from 'src/app/model/approveOrreject/approve/reject.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AproveOrRejectService {
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  approveRequest(approveOrReject:ApproveOrReject){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post<ApproveOrReject>(`${this.Api_url}cancelrequest`,approveOrReject,{ 'headers': headers });
  }
}
