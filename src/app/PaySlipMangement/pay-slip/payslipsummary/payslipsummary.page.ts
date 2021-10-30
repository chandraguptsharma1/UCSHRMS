import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { EmpSlip } from 'src/app/model/empPayslip.module';
import {  PayslipService } from 'src/app/services/empPayslip.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';




@Component({
  selector: 'app-payslipsummary',
  templateUrl: './payslipsummary.page.html',
  styleUrls: ['./payslipsummary.page.scss'],
})
export class PayslipsummaryPage implements OnInit {
// loadedpayslip:Pays;
@ViewChild('pieChart') pieChart;

pies:any;
colorArray: any;

 
  month:any;
  year:any;
  empId:any;
  details:any=[];
  monthid:any;
  yearid:any;


  // url:"http://49.50.69.37:8089/HRMSServices/downloadPayslip/UCS03/December/2021";

  constructor(private activatedRoute:ActivatedRoute,
    private payslipServices:PayslipService)
     {
      this.monthid = this.activatedRoute.snapshot.paramMap.get('month');
      this.yearid = this.activatedRoute.snapshot.paramMap.get('year');
      console.log(this.monthid);
      console.log(this.yearid);
     }
     ionViewDidEnter() {
      this.payslipServices.getPayslipDetails(this.empId,this.monthid,this.yearid).subscribe((response) => {
        this.details = response[0];
        console.log(this.details)
      })
      // this.createBarChart();
      this.createpieChart();
    }
    createpieChart() {
      this.pies = new Chart(this.pieChart.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['NetPay', 'GrossPay', 'projectIncentives', 'Epf','Medical'],
          datasets: [{
            label: 'salary as per month',
            data: [10000, 70000, 2300, 2100,3200],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)'

            ],
            borderWidth: 1
          }]
        },
        // options: {
        //   scales: {
        //     yAxes: [{
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }]
        //   }
        // }
      });
    }




  //   downloadfile(url){
  //     window.open(url)
  //   }

  //  download(url){
  //     window.open(url);
  //   }


  ngOnInit() {

  this.empId="UCS02";

   
    // console.log(this.loadedpayslip);
  }

  downloadPayslip(){
    this.payslipServices.downloadPayslipDetails(this.empId,this.month,this.year).subscribe((response) => {
      this.details = response;
      console.log(this.details)
    })
  }




}
