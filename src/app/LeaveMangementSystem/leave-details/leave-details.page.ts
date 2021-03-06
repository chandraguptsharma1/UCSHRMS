import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApproveOrReject } from 'src/app/model/approveOrreject/approve/reject.module';
import { LeaveId } from 'src/app/model/getLeaveId/getleaveId.module';
import { AproveOrRejectService } from 'src/app/services/approveOrReject/aprove-or-reject.service';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.page.html',
  styleUrls: ['./leave-details.page.scss'],
})
export class LeaveDetailsPage implements OnInit {
  id: any;
  leaveDetails:any=[];
  empRole:any;

  constructor(private activatedRoute: ActivatedRoute,
    private loading: LoaderService,
    private toastService: ToastService,
    private navCtrl:NavController,
    private approveOrRejectServices:AproveOrRejectService,
    private leaveServices:LeaveService,
    private router:Router,) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  approve() {
    this.loading.present();
    const approve: ApproveOrReject = {
      id:this.id,
      status: "approve"
    }
    this.approveOrRejectServices.approveRequest(this.empRole,approve).subscribe((response) => {
      this.loading.dismiss();
      this.toastService.presentToast("Approve Leave");
      this.router.navigate(['/leave']);
    })
    
    


  }

  reject(){
    this.loading.present();
    
    const approve: ApproveOrReject = {
      id:this.id,
      status: "reject"
    }
    this.approveOrRejectServices.approveRequest(this.empRole,approve).subscribe((response) => {
      this.loading.dismiss();
      this.toastService.presentToast("Reject Leave");
      this.router.navigate(['/leave']);
    }) 
  }

  ionViewDidEnter() {
    const leaveid:LeaveId={
      id:this.id

    }
    this.leaveServices.getleaveById(leaveid).subscribe((response) => {
      this.leaveDetails = response;
      console.log(this.leaveDetails)
    })
  }
  back(){
    this.navCtrl.navigateBack('/leave');
  }

  ngOnInit() {
    this.empRole = localStorage.getItem('empRole');
    console.log(this.empRole);

  }

  isStatusReject(){
    if (this.leaveDetails.status=='Reject') return true ;
    else if(this.leaveDetails.status=='Approve') return true;
                     return false ;
  }

  isStatusApprove(){
    if (this.leaveDetails.status=='Approve') return true ;
    if (this.leaveDetails.status=='Reject') return true ;
                     return false ;
  }

  getColor(status){(2)
    switch(status){
      case 'Approve':
        return 'green';
      case 'Reject':
        return 'red';
    }
  }
  cancel(){ 
    this.loading.present();
    this.approveOrRejectServices.cancel(this.id).subscribe((data:any)=>{
      console.log(data);
      this.loading.dismiss();
      this.toastService.presentToast("Leave Cancel");
      this.router.navigate(['/leave/userleave']);
    });

  }

}
