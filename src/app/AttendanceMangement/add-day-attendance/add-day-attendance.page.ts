import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AddAttendance } from 'src/app/model/attendance/addAttendance.module';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-add-day-attendance',
  templateUrl: './add-day-attendance.page.html',
  styleUrls: ['./add-day-attendance.page.scss'],
})
export class AddDayAttendancePage implements OnInit {
  attendanceForm: FormGroup;
  attendance:any={};
  startDate:any;
  
  @Input() childMessage: string;
  
  constructor(
      private router:Router,
      private toastService: ToastService,
      private fb : FormBuilder,
      private employeeService:EmployeeService,
      private loading:LoaderService,
      private navCtrl:NavController,
      private activatedRoute:ActivatedRoute
  ) { 
    this.startDate = this.activatedRoute.snapshot.paramMap.get('date');
    console.log(this.startDate);

    this.attendanceForm = this.fb.group({
     projectId:[''],
     startDate:[''],
     endDate:[''],
     description:[''],
     
  
      })
  }

  submitAttendance(){
    const projectId = this.attendanceForm.get('projectId').value
    const startDate = this.attendanceForm.get('startDate').value
    const endDate = this.attendanceForm.get('endDate').value
    const description = this.attendanceForm.get('description').value
    // const attendanceadddetails:AddAttendance={
    //   attendedDate:,
    //   description:description,
    //   empId:localStorage.getItem('empId'),
    //   endTime:endDate,
    //   projectId:projectId,
    //   startTime:startDate,
    // }
  }

  ngOnInit() {
  }

  submitattendanceForm(){

  }

}
