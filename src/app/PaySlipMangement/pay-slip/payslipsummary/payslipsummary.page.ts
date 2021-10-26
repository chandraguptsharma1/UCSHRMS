import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  option = {
    backgroundColor: '#2c343c',
  
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
  
    tooltip: {
      trigger: 'item'
    },
  
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Union Ads' },
          { value: 235, name: 'Video Ads' },
          { value: 400, name: 'Search Engine' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
  
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  constructor(private activatedRoute :ActivatedRoute,
    private payslipServices:EmpPayslipService,
    private navCtrl:NavController) {}

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

  back(){
    this.navCtrl.navigateBack('/pay-slip');
  }


}
