import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { employee } from '../model/employee.module';
import { employeetest } from '../model/modeltest/employeetest.module';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  EmployeeDetail(employeeDetails:employee){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
    return this.http.post<employee>(`${this.Api_url}addemployees`,employeeDetails,{ 'headers': headers });
  }
  // GetEmployeeDetail(empId:any){
  // //   const headers= new HttpHeaders()
  // //.set('content-type', 'application/json')
  //   return this.http.get<employee>(`${this.Api_url}getAllemployees`,empId);
  // }


  getEmployee():employeetest[]{
    return[
      {
        id:1,
        images:"assets/icon/favicon.png",
        empName:"Sonam",
        EmpAddress:"Nagpur",
        mobileNumber:"435126789",
        JoinDate:"sep2019"
    },
    {
        id:2,
        images:"assets/icon/favicon.png",
        empName:"Amit",
        EmpAddress:"Mumbai",
        mobileNumber:"8888899999",
        JoinDate:"Apr2021"
    },
    {
        id:3,
        images:"assets/icon/favicon.png",
        empName:"Chandra",
        EmpAddress:"Mumbai",
        mobileNumber:"7777788888",
        JoinDate:"Aug2021"
    },
    {
        id:4,
        images:"assets/icon/favicon.png",
        empName:"Prashant",
        EmpAddress:"Mumbai",
        mobileNumber:"9999977777",
        JoinDate:"Aug2019"
    },
    {
        id:5,
        images:"assets/icon/favicon.png",
        empName:"Laxman",
        EmpAddress:"Mumbai",
        mobileNumber:"6666677777",
        JoinDate:"Aug2021"
    }
    ]
  }

// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

  //constructor(private http: HttpClient) { }
  




  


  // employee:employee[]=[
  //   {
  //     id:'e1',
  //     images:"assets/icon/favicon.png",
  //     EmpName:"Sonam",
  //     EmpAddress:"Nagpur",
  //     MobNo:435126789,
  //     JoinDate:"sep2019"
  // },
  // {
  //     id:'e2',
  //     images:"assets/icon/favicon.png",
  //     EmpName:"Amit",
  //     EmpAddress:"Mumbai",
  //     MobNo:8888899999,
  //     JoinDate:"Apr2021"
  // },
  // {
  //     id:'e3',
  //     images:"assets/icon/favicon.png",
  //     EmpName:"Chandra",
  //     EmpAddress:"Mumbai",
  //     MobNo:7777788888,
  //     JoinDate:"Aug2021"
  // },
  // {
  //     id:'e4',
  //     images:"assets/icon/favicon.png",
  //     EmpName:"Prashant",
  //     EmpAddress:"Mumbai",
  //     MobNo:9999977777,
  //     JoinDate:"Aug2019"
  // },
  // {
  //     id:'e5',
  //     images:"assets/icon/favicon.png",
  //     EmpName:"Laxman",
  //     EmpAddress:"Mumbai",
  //     MobNo:6666677777,
  //     JoinDate:"Aug2021"
  // }
  // ]
  // getEmployee():employee[]{
  //   return[...this.employee ]
  // }
  // getEmployeeId(empId:string ){
  //   return {
  //     ... this.employee.find(emp=>
  //       {
  //          return emp.id===empId;
  //       }
  //   )};
  //     }

 
}
