import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnniversaryService {
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  getAnniversary(){
    return this.http.get(`${this.Api_url}todayBirthAndAnniversary`);
   }
}
