import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getleave(){
    return this.http.get<leave>(`${this.Api_url}all-leaverequest`);
  }
}

