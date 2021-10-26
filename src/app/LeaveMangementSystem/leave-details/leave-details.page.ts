import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApproveOrReject } from 'src/app/model/approveOrreject/approve/reject.module';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.page.html',
  styleUrls: ['./leave-details.page.scss'],
})
export class LeaveDetailsPage implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute,
    private loading: LoaderService,
    private toastService: ToastService,
    private navCtrl:NavController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  approve() {
    this.loading.present();
    const approve: ApproveOrReject = {
      status: "approve"
    }

    this.loading.dismiss();
    this.toastService.presentToast("Approve Leave");
    // this.router.navigate(['/home']);


  }

  reject(){
    this.loading.present();
    const approve: ApproveOrReject = {
      status: "reject"
    }

    this.loading.dismiss();
    this.toastService.presentToast("Reject Leave");
    // this.router.navigate(['/home']);


  
  }
  back(){
    this.navCtrl.navigateBack('/leave');
  }

  ngOnInit() {
  }

}
