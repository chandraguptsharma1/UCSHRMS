import { Component, OnInit } from '@angular/core';
import { employeeleave } from 'src/app/model/employeeleave/employeeleave.module';
import { LeaveService } from 'src/app/services/leave/leave.service';

@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.page.html',
  styleUrls: ['./approveleave.page.scss'],
})
export class ApproveleavePage implements OnInit {
  leaves :any = [];
  status:any

  constructor(private leaveService:LeaveService) { }

  ngOnInit() {
    this.status = "Approve"
  }

  ionViewDidEnter() {
    const leave :employeeleave = {
      empId:"UCS104",
      role:"manager"

    }
    this.leaveService.getstatusLeave(this.status,leave).subscribe((response) => {
      console.log(response);
      this.leaves = response
    })
  }

  getColor(status){(2)
    switch(status){
      case 'approve':
        return 'green';
      case 'reject':
        return 'red';
    }
  }

}
