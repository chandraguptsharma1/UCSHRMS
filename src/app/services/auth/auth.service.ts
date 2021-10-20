import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {  environment } from 'src/environments/environment';
import { User } from 'src/app/model/user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  UserLogin(userDetails:User){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
    return this.http.post<User>(`${this.Api_url}validateLogin`,userDetails,{ 'headers': headers });
  }
}
