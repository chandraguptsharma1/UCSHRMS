import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pay-slip',
  templateUrl: './add-pay-slip.page.html',
  styleUrls: ['./add-pay-slip.page.scss'],
})
export class AddPaySlipPage implements OnInit {

  constructor(private router: Router) { }

  go() {
    this.router.navigate(['emp-payslip-details']);
  }
  ngOnInit() {
  }

}
