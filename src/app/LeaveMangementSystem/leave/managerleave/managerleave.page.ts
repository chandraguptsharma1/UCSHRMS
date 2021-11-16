import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LeaveService } from 'src/app/services/leave/leave.service';

@Component({
  selector: 'app-managerleave',
  templateUrl: './managerleave.page.html',
  styleUrls: ['./managerleave.page.scss'],
})
export class ManagerleavePage implements OnInit {
  userType : string;
  userTypeId: number;
  leaves:any=[];
  startdate:any;
  status:any;
  empId:any;

  constructor(
    private leaveService:LeaveService,
    public datepipe: DatePipe,
    public alertController: AlertController,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.empId = localStorage.getItem('empId');
    console.log(this.empId);
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

  ionViewDidEnter() {
  //   this.leaveService.getleave().subscribe((response) => {
  //     if(response !=null){
  //       this.leaves = response;
  //       this.startdate = this.leaves.startDate
  //     }else{
  //       this.leaves = false;
  //     }
      
  //     // this.startdate = this.datepipe.transform(this.leaves.startDate, 'dd/MM/yyyy')
  //     console.log(this.leaves)
  //     console.log(this.startdate)
  //   })
  }

}
