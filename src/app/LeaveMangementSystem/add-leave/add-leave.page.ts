import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { leave } from 'src/app/model/leave.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';



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



  constructor(
    private toastService: ToastService,
    private fb: FormBuilder, 
    private leaveService: LeaveService,
    private router: Router,
    private loading:LoaderService,
    private navCtrl:NavController) {
    this.addLeaveForm = this.fb.group({
      type: ['',Validators.required],
      manager: ['',Validators.required],
      reasons: ['',Validators.required],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
      noofDays: ['',Validators.required],
      discription: ['',Validators.required]
    })
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
      id:parseInt(this.empId),
      leaveType: type,
      reason:reasons,
      startDate: startDate,
      endDate: endDate,
      description: discription
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
    this.empId = '101';
    console.log(this.empId);
    this.date = Date.now();
    console.log(this.date);


  }
  back(){
    this.navCtrl.navigateBack('/leave');
  }

}
