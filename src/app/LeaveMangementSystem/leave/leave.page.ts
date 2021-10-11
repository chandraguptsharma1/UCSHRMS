import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { leave } from 'src/app/model/leave.module';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  userType : string;
  userTypeId: number;
  leaves:leave[];

  status:any;
  

 

  constructor(private leaveService:LeaveService,public alertController: AlertController) { }

  ngOnInit() {
    this.leaves = this.leaveService.getLeave();
    this.userType ="User";
    this.userTypeId= 2;
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'You Can Approve Or Reject ',
      buttons: [
        {
          text: 'Approve',
          role: 'Approve',
          cssClass: 'secondary',
          handler: (value) => {
            console.log('Approve');
            this.status=1;
          }
        }, {
          text: 'Reject',
          handler: () => {
            console.log('Reject');
            this.status=2;
          }
        }
      ]
    });

    await alert.present();
  }

}
