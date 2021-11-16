import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { EmpSlip } from 'src/app/model/empPayslip.module';
import {  PayslipService } from 'src/app/services/empPayslip.service';
import Chart from 'chart.js/auto';
// import { ChartsModule } from 'ng2-charts';




@Component({
  selector: 'app-payslipsummary',
  templateUrl: './payslipsummary.page.html',
  styleUrls: ['./payslipsummary.page.scss'],
})
export class PayslipsummaryPage implements OnInit {
// loadedpayslip:Pays;
@ViewChild('pieChart') pieChart;
@ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
pies:any;
colorArray: any;

 
  month:any;
  year:any;
  empId:any;
  details:any=[];
  monthid:any;
  yearid:any;

  private doughnutChart: Chart;


  // url:"http://49.50.69.37:8089/HRMSServices/downloadPayslip/UCS03/December/2021";

  constructor(private activatedRoute:ActivatedRoute,
    private navCtrl:NavController,
    private payslipServices:PayslipService)
     {
      
     }
     ionViewDidEnter() {
      this.payslipServices.getPayslipDetails(this.empId,this.monthid,this.yearid).subscribe((response) => {
        this.details = response[0];
        console.log(this.details)
      });

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["netPay", "GrossPay", "ProjectIntensive", "Epf", "Medical", ],
          datasets: [
            {
              label: "# of Votes",
              data: [this.details.netPay,this.details.gross, 6,2],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
            }
          ]
        }
      });
      // this.createBarChart();
      // this.createpieChart();
    }
  




  //   downloadfile(url){
  //     window.open(url)
  //   }

  //  download(url){
  //     window.open(url);
  //   }
  ngAfterViewInit(): void {
    
  }

  back(){
    this.navCtrl.navigateBack('/pay-slip');
  }

  ngOnInit() {
    this.monthid = this.activatedRoute.snapshot.paramMap.get('month');
    this.yearid = this.activatedRoute.snapshot.paramMap.get('year');
    console.log(this.monthid);
    console.log(this.yearid);
  this.empId=localStorage.getItem('empId');
  console.log(this.empId);

  
    // console.log(this.loadedpayslip);
  }

  downloadPayslip(){
    this.payslipServices.downloadPayslipDetails(this.empId,this.month,this.year).subscribe((response) => {
      this.details = response;
      console.log(this.details)
    })
  }




}
