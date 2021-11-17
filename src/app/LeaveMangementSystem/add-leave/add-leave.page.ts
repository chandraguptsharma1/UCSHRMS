import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { leave } from 'src/app/model/leave.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';



@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.page.html',
  styleUrls: ['./add-leave.page.scss'],
})
export class AddLeavePage implements OnInit {
  // addLeave:any ={}; 
  addLeaveForm: FormGroup;
  empId: any;
  date: any;
  managerEmpId:any;
  managerName:any



  constructor(
    private managerService:ManagerService,
    private toastService: ToastService,
    private fb: FormBuilder, 
    private leaveService: LeaveService,
    private router: Router,
    private loading:LoaderService,
    private navCtrl:NavController) {
    this.addLeaveForm = this.fb.group({
      
      type: new FormControl('', Validators.required),
      manager:new FormControl('', Validators.required),
      reasons: new FormControl('', Validators.required),
      startDate:new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      noofDays:new FormControl('', Validators.required),
      discription: new FormControl('', Validators.required)
    })
  }
  validation_messages = {
    'type': [
      { type: 'required', message: 'type is required.' },
      
    ],
    'reasons': [
      { type: 'required', message: 'reasons is required.' },
      { type: 'minlength', message: 'reasons must be at least 5 characters long.' },
    ],
    'startDate': [
      { type: 'required', message: 'startDate is required.' },
      
    ],
    'endDate': [
      { type: 'required', message: 'endDate is required.' },
     
    ],
    'discription': [
      { type: 'required', message: 'discription is required.' },
      
    ],
    
    
    }


  submitleaveForm() {
    this.loading.present();

    const type = this.addLeaveForm.get('type').value
    const manager = this.addLeaveForm.get('manager').value
    const reasons = this.addLeaveForm.get('reasons').value
    const startDate = this.addLeaveForm.get('startDate').value
    const endDate = this.addLeaveForm.get('endDate').value
    const discription = this.addLeaveForm.get('discription').value
    const requestBody=`{empName:${type},mobileNumber:${manager}}`
    console.log(requestBody);
    const userDetails: leave = {
      managerEmpId:this.managerEmpId,
      managerName:this.managerName,
      empId:this.empId,
      leaveType: type,
      reason:reasons,
      startDate: startDate,
      endDate: endDate,
      description: discription,
      status:"Pending"
    }
    console.log(userDetails);
    
    this.leaveService.leave(userDetails).subscribe((data:any)=>{
      this.loading.dismiss();
      this.toastService.presentToast("Leave Added");
      this.router.navigate(['/home']);
      
      
    });
    // this.leaveService.leave(formData).subscribe((data:any)=>{
    //   console.log("im in server",data)
    // });
  }

  ngOnInit() {
    this.empId = localStorage.getItem('empId');
    console.log(this.empId);
    this.date = Date.now();
    console.log(this.date);
    this.managerName= "Kalyan",
    this.managerEmpId="UCS104"
    this.managerService.getManager().subscribe((data:any)=>{
      console.log(data)
    });

  }
  back(){
    this.navCtrl.navigateBack('/leave');
  }

}
