import { Component, OnInit } from '@angular/core';
import { employeeleave } from 'src/app/model/employeeleave/employeeleave.module';
import { LeaveService } from 'src/app/services/leave/leave.service';

@Component({
  selector: 'app-pendingleave',
  templateUrl: './pendingleave.page.html',
  styleUrls: ['./pendingleave.page.scss'],
})
export class PendingleavePage implements OnInit {
  status:any
  leaves :any = [];
  constructor(private leaveService:LeaveService) { }

  ngOnInit() {
    this.status = "Pending"
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

}
