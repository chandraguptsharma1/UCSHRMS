import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { employee } from 'src/app/model/employee.module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  results: any;
  employees:any=[];
  empId:any;
  public items: any = [];
  router: any;
  Service: any;

  constructor(private employeeService:EmployeeService) {
  }

  addRecord() {
    this.router.navigate(['add-employee']);
  }
  ngOnInit() {
    this.empId = 104;
    //localStorage.getItem('emplId')
    //this.employees = this.Service.getEmployee();
   this.employees = this.employeeService.getEmployee();
   console.log()
    // fetch('./assets/data.json').then(res=>res.json()).then(json=>{
    //   console.log('results::',json);
    //   this.results=json;
    // })
  }
  // ionViewDidEnter() {
  //   this.employeeService.GetEmployeeDetail(this.empId).subscribe((response) => {
  //     this.employees = response;
  //     console.log(this.employees)
  //   })
  // }

  // onSelect(item: employee): void {
  //   this.navCtrl.navigateRoot('/update-employee-details/item',);
  // }

}