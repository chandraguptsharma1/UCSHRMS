import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LeaveService } from 'src/app/services/leave/leave.service';

@Component({
  selector: 'app-userleave',
  templateUrl: './userleave.page.html',
  styleUrls: ['./userleave.page.scss'],
})
export class UserleavePage implements OnInit {
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
    this.leaveService.getLeaveManager().subscribe((response) => {
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
