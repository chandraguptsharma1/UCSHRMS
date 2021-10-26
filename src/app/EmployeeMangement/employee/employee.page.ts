import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';


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

  constructor(private employeeService:EmployeeService,
    private navCtrl:NavController) {
  }

  // addRecord() {
  //   this.router.navigate(['add-employee']);
  // }

  ngOnInit() {
    //this.empId = 104;
    localStorage.getItem('emplId')
    //this.employees = this.Service.getEmployee();
  //this.employees = this.employeeService.getEmployee();
  //this.employees = this.employeeService.GetEmployeeDetail(this.empId);
   console.log()
    // fetch('./assets/data.json').then(res=>res.json()).then(json=>{
    //   console.log('results::',json);
    //   this.results=json;
    // })
  }
  ionViewDidEnter() {
    this.employeeService.GetEmployeeDetail(this.empId).subscribe((response) => {
      this.employees = response;
      console.log(this.employees)
    })
  }
  back(){
    this.navCtrl.navigateBack('/home');
  }

  // onSelect(item: employee): void {
  //   this.navCtrl.navigateRoot('/update-employee-details/item',);
  // }

}