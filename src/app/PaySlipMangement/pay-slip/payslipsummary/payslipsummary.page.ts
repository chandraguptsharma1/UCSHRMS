import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { EmpSlip } from 'src/app/model/empPayslip.module';
import { EmpPayslipService } from 'src/app/services/empPayslip.service';


@Component({
  selector: 'app-payslipsummary',
  templateUrl: './payslipsummary.page.html',
  styleUrls: ['./payslipsummary.page.scss'],
})
export class PayslipsummaryPage implements OnInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  loadedpayslip:EmpSlip;
  doughnutChart: any;

  constructor(private activatedRoute :ActivatedRoute,private payslipServices:EmpPayslipService) {
    
   }

   ngAfterViewInit() {
    
    // this.doughnutChartMethod();
    
  }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('payId')) {
        return;
      }
      const payId=paraMap.get('payId');
     this.loadedpayslip= this.payslipServices.getPayslips(payId);
    });
    console.log(this.loadedpayslip);
  }

  // doughnutChartMethod() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [50, 29, 15, 10, 7],
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)'
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }


}
