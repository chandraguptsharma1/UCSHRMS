import { Injectable } from '@angular/core';
import { employee } from '../model/employee.module';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:employee[]=[
    {
      id:'e1',
      images:"assets/icon/favicon.png",
      EmpName:"Sonam",
      EmpAddress:"Nagpur",
      MobNo:435126789,
      JoinDate:"sep2019"
  },
  {
      id:'e2',
      images:"assets/icon/favicon.png",
      EmpName:"Amit",
      EmpAddress:"Mumbai",
      MobNo:8888899999,
      JoinDate:"Apr2021"
  },
  {
      id:'e3',
      images:"assets/icon/favicon.png",
      EmpName:"Chandra",
      EmpAddress:"Mumbai",
      MobNo:7777788888,
      JoinDate:"Aug2021"
  },
  {
      id:'e4',
      images:"assets/icon/favicon.png",
      EmpName:"Prashant",
      EmpAddress:"Mumbai",
      MobNo:9999977777,
      JoinDate:"Aug2019"
  },
  {
      id:'e5',
      images:"assets/icon/favicon.png",
      EmpName:"Laxman",
      EmpAddress:"Mumbai",
      MobNo:6666677777,
      JoinDate:"Aug2021"
  }
  ]
  getEmployee():employee[]{
    return[...this.employee ]
  }
  getEmployeeId(empId:string ){
    return {
      ... this.employee.find(emp=>
        {
           return emp.id===empId;
        }
    )};
      }

  constructor() { }
}
