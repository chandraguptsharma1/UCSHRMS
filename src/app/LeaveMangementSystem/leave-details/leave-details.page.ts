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
    this.approveOrRejectServices.approveRequest(approve).subscribe((response) => {
      this.loading.dismiss();
      this.toastService.presentToast("Approve Leave");
      this.router.navigate(['/home']);
    })
    
    


  }

  reject(){
    this.loading.present();
    const approve: ApproveOrReject = {
      id:this.id,
      status: "reject"
    }
    this.approveOrRejectServices.approveRequest(approve).subscribe((response) => {
      this.loading.dismiss();
      this.toastService.presentToast("Reject Leave");
      this.router.navigate(['/home']);
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
  }

}
