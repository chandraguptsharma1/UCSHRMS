import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AddAttendance } from 'src/app/model/attendance/addAttendance.module';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ProjectIdService } from 'src/app/services/projectid/project-id.service';
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
  date:any;
  projectId:any=[];
  
  @Input() childMessage: string;
  
  constructor(
      private router:Router,
      private toastService: ToastService,
      private fb : FormBuilder,
      private employeeService:EmployeeService,
      private loading:LoaderService,
      private navCtrl:NavController,
      private activatedRoute:ActivatedRoute,
      private attendanceService:AttendanceService,
      private projectService:ProjectIdService

  ) { 
    

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
    const attendanceadddetails:AddAttendance={
      attendedDate:this.date,
      description:description,
      empId:localStorage.getItem('empId'),
      endTime:endDate,
      projectId:projectId,
      startTime:startDate,
    }
    console.log(attendanceadddetails)
    this.attendanceService.UserAttendance(attendanceadddetails).subscribe((response:any)=>{
       console.log(response);
       console.log("im in")
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      console.log(params)
 
    });
     this.date= '2021-11-09T11:53:20.000+00:00';
     console.log(this.date);

     this.projectService.getProjectId().subscribe((response:any)=>{
       console.log(response);
       
     })

  }

  submitattendanceForm(){

  }
 test:any;
  getdata(){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      range:Date
    };
    this.test = "saturday"+state.range;
    console.log(this.test)
  }

}
