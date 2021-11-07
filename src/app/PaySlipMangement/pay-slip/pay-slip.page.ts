import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmpSlip } from 'src/app/model/empPayslip.module';
import {  PayslipService } from 'src/app/services/empPayslip.service';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.page.html',
  styleUrls: ['./pay-slip.page.scss'],
})
export class PaySlipPage implements OnInit {

  public name='laxman';
  // payslip:Pays[];
  selectyear:any;
  empId:any;
  yeardate:any;
  yearPayslip:any=[];


  constructor( private _router:Router,private payslipServices:PayslipService,private navCtrl:NavController, ) {

    }

    getpayslipdata(){
      var year = new Date(this.selectyear).getFullYear();
      this.yeardate=year;
      console.log(year)
      this.payslipServices.getyearPayslipDetails(this.empId,this.yeardate).subscribe((response) => {
        if(response !=null){
          this.yearPayslip = response;
          console.log("im in server")
        console.log(response);
        console.log(JSON.stringify(response));
        }else{
          this.yearPayslip = false;
        }
        
        
      })
    }

    back(){
      this.navCtrl.navigateBack('/home');
    }


  ngOnInit() {
    this.empId= localStorage.getItem('empId');
    console.log(this.empId)
    // this.payslip=this.payslipServices.getAllPayslips();
  }

}



