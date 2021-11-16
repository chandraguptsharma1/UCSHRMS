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
  data:any;
  projectId:any=[];
  date:any
  
  
  
  constructor(
      private router:Router,
      private toastService: ToastService,
      private fb : FormBuilder,
      private employeeService:EmployeeService,
      private loading:LoaderService,
      private navCtrl:NavController,
      private activatedRoute:ActivatedRoute,
      private attendanceService:AttendanceService,
      private projectService:ProjectIdService,
      

  ) { 
    this.data = this.activatedRoute.snapshot.paramMap.get('d');
    console.log(this.data);

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


  back(){
    this.navCtrl.navigateBack('/attendance');
  }
  page:any;
  ngOnInit() {
    console.log('>>date Selected',this.router.getCurrentNavigation().extras.state);
    var date1 = this.router.getCurrentNavigation().extras.state;
    console.log(JSON.stringify(date1.dateSelected))
    this.date = new Date(date1.dateSelected);
    // this.date = new Date()
    console.log(this.date)

  }

  
 

}
