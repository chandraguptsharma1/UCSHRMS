import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  empId:any;
  date:any;
  empRole:any;
  constructor(
    private platform: Platform,
    private router:Router,
    public alertCtrl: AlertController) {
    
  //   Date.prototype.getWeekOfMonth = function () {
  //     var firstDay = new Date(this.setDate(1)).getDay();
  //     var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  //     return Math.ceil((firstDay + totalDays) / 7);
  // }
  }

  
  
  ngOnInit() {
    this.empId=localStorage.getItem('empId');
    this.empRole=localStorage.getItem('empRole');
    console.log(this.empId);
    console.log(this.empRole)
   
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
  
 

}
