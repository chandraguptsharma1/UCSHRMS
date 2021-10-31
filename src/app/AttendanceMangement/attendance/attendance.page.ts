import { DatePipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { WeekAndDayRangeService } from 'src/app/services/weekAndDay/week-and-day-range.service';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  date:any;
  dateRange:any;
  yourDateStart:any;
  dateall:any;
  Weekdays:any;
  saturdayAll:any=[];
  selectedValue
  geValue:any;
  allday:any=[]

  constructor(
    private navCtrl:NavController,
    private sharedS:WeekAndDayRangeService,
    public datepipe: DatePipe,
    public router:Router) { }

  ngOnInit() {
    this.attendance();
    const st = this.getAllSaturday(2021)
    console.log('=====>',st[0])
    this.saturdayAll = st
    // this.all();
    
    // this.dateRange = '30/10/2021'
    
    
  }

  attendance(){
    // const from = new Date("2021-07-27T08:08:20.794Z");
    // const to = new Date("2021-09-24T08:08:20.794Z");
    // const buildDateString = (date) => {
    //   const day = date.getDate().toString().padStart(2, "0");
    //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
    //   const year = date.getFullYear();
      
    //   return `${day}.${month}.${year}`;
    // }
    // const increaseDays = (date, amount) => new Date(date.setDate(date.getDate() + amount));
    // console.log(increaseDays);
    // const buildWeeks = (start, end) => {
    //   const weeks = [];
    //   let current = new Date(start);
      
    //   while(current < end) {
    //     const beginOfWeek = new Date(current);
    //     let endOfWeek = increaseDays(current, 6);
    //     endOfWeek = endOfWeek > end ? end : endOfWeek;
        
    //     weeks.push([buildDateString(beginOfWeek), buildDateString(endOfWeek)]);
    //     current = increaseDays(current, 1);
    //   }
      
    //   return weeks;
    // }

    // const weeks = buildWeeks(from, to);

    // weeks.forEach(([start, end]) => {
    //   const dates = this.sharedS.getDateRange(start,end);
    // const weeksGrouped = this.sharedS.getWeeksMapped(dates);
    // // console.log(weeksGrouped);
    // console.log(dates);
    //   this.date = weeks
    // });
    // console.log(this.date);
    
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

  // all(){
  //   let dateString = '2021-11-16T00:00:00' 
  //   let newDate = new Date(dateString);
  //   let dateString1 = '2022-11-16T00:00:00' 
  //   let newDate1 = new Date(dateString);
  //   let startDate = moment('2018-05-01');
  //   let endDate = moment('2018-05-15');
  //   const dates = this.sharedS.getDateRange(newDate,newDate1);
  //   const weeksGrouped = this.sharedS.getWeeksMapped(dates);
  //   console.log(weeksGrouped);
  //   console.log(dates);
  // }

  // customAlertOptions: any = {
  //   header: 'Pizza Toppings',
  //   subHeader: 'Select your toppings',
  //   message: '$1.00 per topping',
  //   translucent: true
  // };

  // customPopoverOptions: any = {
  //   header: 'Hair Color',
  //   subHeader: 'Select your hair color',
  //   message: 'Only select your dominant hair color'
  // };

  customActionSheetOptions: any = {
    header: 'Weeks',
    subHeader: 'Select your Week Range'
  };
  
  getValue(){
    // console.log(this.dateRange)
   this.geValue = this.dateRange;
   console.log(this.geValue)

    const d  = new Date(this.dateRange);
    d.setDate(d.getDate()-5);
    var dateRangeList = []
    
   this.allday = [...Array(6)].map((_, i) => {
      const d  = new Date(this.dateRange);
      d.setDate(d.getDate() - i)
      return d
  })
    console.log('start date',this.allday.reverse())
    // var start = new Date(this.dateRange);
    // var end = new Date(start.setFullYear(start.getDate()-5));
    // start.setDate(start.getDate()-5);
    // var end = new Date(start.setDate(d.getDate()+(6 - this.dateRange)));
    // console.log(start);
    // console.log(end);
    
  
    // let days=null;
    // console.log(this.dateRange);
    // this.dateall = this.dateRange.split(',');
    // console.log(this.dateall[0]);
    // const dates = this.sharedS.getDateRange(d,this.dateRange);
    // const weeksGrouped = this.sharedS.getWeeksMapped(dates);
    
    
  }

  getAllSaturday(y: any): any {
    y = y || new Date().getFullYear();
    var A = [];
    let list = []
    var D = new Date(y, 0, 1)
    var day = D.getDay();
    if (day != 0) D.setDate(D.getDate() + (6 - day));
    A[0] = D.toLocaleString();
    while (D) {
      let list:any = [];
      D.setDate(D.getDate() + 7);
      if (D.getFullYear() != y) return A;
      list =A.push(D.toLocaleDateString());
      

      
      
    }
 
  }

  addPagePassData(){
    const navigationExtras:NavigationExtras ={
      state:{
        range:this.geValue
      }
    };
    this.router.navigate(['add-day-attendance'],navigationExtras);
  }


}
