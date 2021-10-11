import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmpSlip } from 'src/app/model/empPayslip.module';
import { EmpPayslipService } from 'src/app/services/empPayslip.service';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.page.html',
  styleUrls: ['./pay-slip.page.scss'],
})
export class PaySlipPage implements OnInit {

  public name='laxman';
  empPayslipDEtail:EmpSlip[];
  gottoPaySlipSummary(){


     this.navCtrl.navigateForward([':payId', {
       data:JSON.stringify(this.empPayslipDEtail)
     }])
   }



  constructor(private router: Router,private empSlipservice:EmpPayslipService,private navCtrl:NavController) { }



  ngOnInit() {
    this.empPayslipDEtail =this.empSlipservice.getEmpPaySlip();
  }

  goBack() {
    this.router.navigate(['upload-payslip']);
  }


}
