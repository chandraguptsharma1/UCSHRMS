import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private Api_url = environment.baseUrl

  constructor(private http: HttpClient) { }

  getManager(){
    return this.http.get(`${this.Api_url}managerLeaveRequest`);
  }
}
