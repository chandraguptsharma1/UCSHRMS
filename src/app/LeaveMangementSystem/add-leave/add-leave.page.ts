import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { leave } from 'src/app/model/leave.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LeaveService } from 'src/app/services/leave/leave.service';



@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.page.html',
  styleUrls: ['./add-leave.page.scss'],
})
export class AddLeavePage implements OnInit {
  // addLeave:any ={}; 
  addLeaveForm: FormGroup;
  empId: string;
  date: any;



  constructor(private fb: FormBuilder, private leaveService: LeaveService, private router: Router) {
    this.addLeaveForm = this.fb.group({
      type: [''],
      manager: [''],
      reasons: [''],
      startDate: [''],
      endDate: [''],
      noofDays: [''],
      discription: ['']
    })
  }


  submitleaveForm() {

    const type = this.addLeaveForm.get('type').value
    const manager = this.addLeaveForm.get('manager').value
    const reasons = this.addLeaveForm.get('reasons').value
    const startDate = this.addLeaveForm.get('startDate').value
    const endDate = this.addLeaveForm.get('endDate').value
    const discription = this.addLeaveForm.get('discription').value
    const requestBody=`{empName:${type},mobileNumber:${manager}}`
    console.log(requestBody);
    const userDetails: leave = {
      EMPID: this.empId,
      LEAVETYPE: type,
      STARTDATE: startDate,
      ENDDATE: endDate,
      ACTIONBY: manager,
      ACTIONDATE: this.date,
      NOOFDAYS: this.date,
      DESCRIPTION: discription,
      STATUS: "Pending",

    }
    console.log(userDetails);
    // this.leaveService.leave(formData).subscribe((data:any)=>{
    //   console.log("im in server",data)
    // });
  }

  ngOnInit() {
    this.empId = '101';
    console.log(this.empId);
    this.date = Date.now();
    console.log(this.date);


  }

}
