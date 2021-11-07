import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { getAttendance } from 'src/app/model/attendance/getAttendance.module';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
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
  date: any;
  dateRange: any;
  yourDateStart: any;
  dateall: any;
  Weekdays: any;
  saturdayAll: any = [];
  selectedValue
  geValue: any;
  allday: any = []
  allSaturdayDate: any = []

  constructor(
    private navCtrl: NavController,
    private sharedS: WeekAndDayRangeService,
    public datepipe: DatePipe,
    public router: Router,
    private attendanceService: AttendanceService) { }

  ngOnInit() {

    const st = this.getAllSaturday(2021)
    console.log('=====>', st[0])
    this.saturdayAll = st
    // this.all();

    // this.dateRange = '30/10/2021'


  }



  back() {
    this.navCtrl.navigateBack('/home');
  }



  customActionSheetOptions: any = {
    header: 'Weeks',
    subHeader: 'Select your Week Range'
  };

  getValue() {
    // console.log(this.dateRange)
    this.geValue = this.dateRange;
    console.log(this.geValue)

    const d = new Date(this.dateRange);
    d.setDate(d.getDate() - 5);
    var dateRangeList = []

    this.allday = [...Array(6)].map((_, i) => {



      const d = new Date(this.dateRange);
      d.setDate(d.getDate() - i)
    
      return { d }
    })
    console.log('start date', JSON.stringify(this.allday.reverse()))
    this.allSaturdayDate = JSON.stringify(this.allday)
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
    const UserAttendance: getAttendance = {
      attendedDate: this.geValue
    }

    this.attendanceService.getUserAttendance(UserAttendance).subscribe((response: any) => {
      console.log(response);
    })


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
      let list: any = [];
      D.setDate(D.getDate() + 7);
      if (D.getFullYear() != y) return A;
      list = A.push(D.toLocaleDateString());




    }

  }

  trackByMethod(index:number, el:any): number {
    return el.d;
  }

  addPagePassData() {
    console.log(this.geValue)

    // const navigationExtras:NavigationExtras ={
    //   state:{
    //     range:this.geValue
    //   }
    // };
    this.router.navigateByUrl('/add-day-attendance', {
      state: { dateSelected: this.geValue }
    });
  }


}
