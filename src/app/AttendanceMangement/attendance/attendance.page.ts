import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  date:any;

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    this.attendance();
  }

  attendance(){
    const from = new Date("2020-07-27T08:08:20.794Z");
    const to = new Date("2020-09-24T08:08:20.794Z");
    const buildDateString = (date) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      
      return `${day}.${month}.${year}`;
    }
    const increaseDays = (date, amount) => new Date(date.setDate(date.getDate() + amount));
    console.log(increaseDays);
    const buildWeeks = (start, end) => {
      const weeks = [];
      let current = new Date(start);
      
      while(current < end) {
        const beginOfWeek = new Date(current);
        let endOfWeek = increaseDays(current, 6);
        endOfWeek = endOfWeek > end ? end : endOfWeek;
        
        weeks.push([buildDateString(beginOfWeek), buildDateString(endOfWeek)]);
        current = increaseDays(current, 1);
      }
      
      return weeks;
    }

    const weeks = buildWeeks(from, to);

    weeks.forEach(([start, end]) => {
      this.date = weeks
    });
    console.log(this.date);
    
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

}
