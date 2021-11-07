import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { leave } from 'src/app/model/leave.module';
import { LeaveService } from 'src/app/services/leave/leave.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  userType : string;
  userTypeId: number;
  leaves:any=[];
  startdate:any;
  status:any;
  

 

  constructor(
    private leaveService:LeaveService,
    public datepipe: DatePipe,
    public alertController: AlertController,
    private navCtrl:NavController
    ) { }

  ngOnInit() {
    // this.leaves = this.leaveService.getLeave();
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
  
  getColor(status){(2)
    switch(status){
      case 'approve':
        return 'green';
      case 'reject':
        return 'red';
    }
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

   ionViewDidEnter() {
    this.leaveService.getleave().subscribe((response) => {
      if(response !=null){
        this.leaves = response;
        this.startdate = this.leaves.startDate
      }else{
        this.leaves = false;
      }
      
      // this.startdate = this.datepipe.transform(this.leaves.startDate, 'dd/MM/yyyy')
      console.log(this.leaves)
      console.log(this.startdate)
    })
  }

}
