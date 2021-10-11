import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employee } from 'src/app/model/employee.module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {
  employee:employee;

  constructor(private activatedRoute :ActivatedRoute,private empServices:EmployeeService) {
    
   }

  

   ngOnInit() {
     console.log(this.employee);
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('empId')) {
        return;
      }
      const empId=paraMap.get('empId');
     this.employee= this.empServices.getEmployeeId(empId);
    });
    console.log(this.employee);
  }
}
