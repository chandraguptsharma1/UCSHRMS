import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forgetPassword } from 'src/app/model/forgetPassword/forgetPassword.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  forgetPassword(forgetEmail:forgetPassword){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post<forgetPassword>(`${this.Api_url}forgotpassword`,forgetEmail,{ 'headers': headers });
  }
}
