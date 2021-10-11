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
  employees:employee[];

  public items: any = [];

  constructor(private router:Router,private employeeService:EmployeeService,public navCtrl: NavController, ) {
  }

  addRecord() {
    this.router.navigate(['add-employee']);
  }
  ngOnInit() {
    this.employees = this.employeeService.getEmployee();
    // fetch('./assets/data.json').then(res=>res.json()).then(json=>{
    //   console.log('results::',json);
    //   this.results=json;
    // })
  }

  onSelect(item: employee): void {
    this.navCtrl.navigateForward('/update-employee',);
  }

  

}
