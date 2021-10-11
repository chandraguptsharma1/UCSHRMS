import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    return this.http.post<User>(`${this.Api_url}validateLogin`,userDetails);
  }
}
