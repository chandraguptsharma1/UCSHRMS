import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  empId:any;
  constructor() {
    
  //   Date.prototype.getWeekOfMonth = function () {
  //     var firstDay = new Date(this.setDate(1)).getDay();
  //     var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  //     return Math.ceil((firstDay + totalDays) / 7);
  // }
  }
  ngOnInit() {
    this.empId=localStorage.getItem('empId');
    console.log(this.empId)
  }


}
