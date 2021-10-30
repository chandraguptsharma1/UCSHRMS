import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayslipService {
  

  constructor(private http:HttpClient) { }

//   getAllPayslips(){
//     return [...this.payslip];
//   }
//   getPayslips(payId:String ){
//  return {... this.payslip.find(pays=>{
//    return pays.id===payId;
//  })};
//   }

  private Api_url = environment.baseUrl


  UploadFile(file:any){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post(`${this.Api_url}saveSalaryDetails`,file,{ 'headers': headers });
  }

  getPayslipDetails(empId:any,month:any,year:any){
    // const headers= new HttpHeaders()
    // .set('content-type', 'application/json')
    return this.http.get(`${this.Api_url}getMonthPaydetails`+ '/' +empId+ '/' +month+ '/' +year);
  }

  getyearPayslipDetails(empId:any,year:any){
    // const headers= new HttpHeaders()
    // .set('content-type', 'application/json')
    return this.http.get(`${this.Api_url}yearlyPayslipDetails`+ '/' +empId+ '/'  +year);
  }

  downloadPayslipDetails(empId:any,month:any,year:any){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    return this.http.get(`${this.Api_url}downloadPayslip`+ '/' +empId+ '/' +month+ '/' +year,{ 'headers': headers });
  }

}
