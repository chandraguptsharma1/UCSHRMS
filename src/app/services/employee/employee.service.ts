import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from 'src/app/model/employee/employee.module';
import { updateemployee } from 'src/app/model/employee/updateEmployee.module';
import { employeetest } from 'src/app/model/modeltest/employeetest.module';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  UploadDetail(id: any, value: any) {
    throw new Error('Method not implemented.');
  }
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  EmployeeDetail(employeeDetails:employee){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post<employee>(`${this.Api_url}addemployees`,employeeDetails,{ 'headers': headers });
  }
  updateEmployeeDetail(updateEmployeeDetails:updateemployee){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.put<updateemployee>(`${this.Api_url}updateEmployees`,updateEmployeeDetails,{ 'headers': headers });
    //return this.http.put<updateemployee>(`${this.Api_url}updateEmployees`+ '/' +updateEmployeeDetails,{ 'headers': headers });
  }


  GetEmployeeDetail(empId:any){
  //   const headers= new HttpHeaders()
  //.set('content-type', 'application/json')
    return this.http.get<employeetest>(`${this.Api_url}getAllemployees`,empId);
  }

  getEmployeeId(id:any){
   return this.http.get<employee>(`${this.Api_url}getemployees`+ '/' + id);
  }
  // UpdateAllData(Id:any){
  //   return this.http.put<employeetest>(`${this.Api_url}updateEmployees`+ '/' + id);

  // }
}
