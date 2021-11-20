import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { getAttendance } from 'src/app/model/attendance/getAttendance.module';
import { ShowAttendance } from 'src/app/model/attendance/ShowAttendance.module';
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
  weekData: any = []
  empId: any;
  
  newSaturdayData:any = []
  matchdate: any = [
    {
      "empId": "101",
      "startTime": "2021-10-07T08:29:31.391+00:00",
      "endTime": "2021-10-07T08:29:31.391+00:00",
      "projectId": "101",
      "description": "This project is of Hrms",
      "attendedDate": "2021-01-16T11:53:20.000+00:00"
    },
    {
      "empId": "101",
      "startTime": "2021-10-07T08:29:31.391+00:00",
      "endTime": "2021-10-07T08:29:31.391+00:00",
      "projectId": "101",
      "description": "This project is of Hrms",
      "attendedDate": "2021-01-16T11:53:20.000+00:00"
    },
    {
      "empId": "101",
      "startTime": "2021-10-07T08:29:31.391+00:00",
      "endTime": "2021-10-07T08:29:31.391+00:00",
      "projectId": "101",
      "description": "This project is of Hrms",
      "attendedDate": "2021-01-16T11:53:20.000+00:00"
    },
    {
      "empId": "101",
      "startTime": "2021-10-07T08:29:31.391+00:00",
      "endTime": "2021-10-07T08:29:31.391+00:00",
      "projectId": "101",
      "description": "This project is of Hrms",
      "attendedDate": "2021-01-16T11:53:20.000+00:00"
    }
  ]
  constructor(
    private navCtrl: NavController,
    private sharedS: WeekAndDayRangeService,
    public datepipe: DatePipe,
    public router: Router,
    private attendanceService: AttendanceService) { }

  ngOnInit() {

    const st = this.getAllSaturday(2021)
    // console.log('=====>', st[0])
    this.saturdayAll = st
    // this.all();

    // this.dateRange = '30/10/2021'
    this.empId = localStorage.getItem('empId');
    console.log(this.empId);

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
    this.geValue = new Date(this.dateRange);
    console.log(this.geValue)

    const d = new Date(this.dateRange);
    d.setDate(d.getDate() - 5);
    var dateRangeList = []

    this.allday = [...Array(6)].map((_, i) => {



      const d = new Date(this.dateRange);
      d.setDate(d.getDate() - i)

      return { d }
    })

    this.allSaturdayDate = this.allday.reverse()

    const UserAttendance: getAttendance = {
      empId: this.empId,
      attendedDate: this.geValue
    }

    // console.log(UserAttendance);

    console.log(this.datepipe.transform(this.allSaturdayDate.d, 'yyyy-MM-dd'))



    this.attendanceService.getUserAttendance(UserAttendance).subscribe((response: any) => {
      // console.log(response);
      this.weekData = response.reverse();
      console.log('weekData',this.weekData);
      this.getdata()
    })

    console.log('hhshs',this.weekData)
    // var newData = []
    
    // this.allSaturdayDate.filter(ele =>{
    //  var d = new Date(ele.d).getTime();
    //  console.log('gdsdhsdhhsfdh',d)
     
    //   this.weekData.filter(re=>{
    //     console.log('weedkkkkk')
    //     var e =  re.attendedDate.split('T');

    //     console.log(e)
    //     if(d == e){
    //       newData.push(re)
    //     }
    //   })
    // });
    // console.log('new Data',newData)
    // for (let i = 0; i < this.allSaturdayDate.length; i++) {
    //   console.log('insert saturday')
    //   for (let j = 0; j < this.weekData.length; j++) {
    //     console.log('insert weekdata')
    //     if (this.allSaturdayDate[i].d == this.weekData[j].attendedDate) {
    //       console.log(this.allSaturdayDate[i].d)
    //       console.log(this.weekData[j].attendedDate)
    //       newData.push(this.weekData[j]);
    //       console.log(true)

    //     } else {
    //       newData.push({
    //         date: this.allSaturdayDate[i].d,
    //         noData: ""
    //       })
    //     }

    //   }

    // }

    // let arr1 = [1, 10, 11, 12, 15, 100, 5, 6, 7, 5];
    // let arr2 = [1, 10, 11, 12, 15, 100, 50, 60, 70, 50];

   
    //   var arr = []; // Array to contain match elements
    //   for (var i = 0; i < this.allSaturdayDate.length; ++i) {
    //     for (var j = 0; j < this.weekData.length; ++j) {
    //       console.log('uuuuuuuu')
    //       if (this.allSaturdayDate[i].d == this.weekData[j].attendedDate) { // If element is in both the arrays
    //         arr.push(this.weekData[i]); // Push to arr array
    //       }
    //     }
    //   }

    // console.log(arr);
    // console.log('new Data', newData)
   
  }

  getdata(){
    var newData:ShowAttendance[] = [];
    for (let i = 0; i < this.allSaturdayDate.length;i++) {
      // console.log(this.datepipe.transform(this.allSaturdayDate[i].d, 'dd-mm-yyyy'))
      var saturday = this.datepipe.transform(this.allSaturdayDate[i].d, 'dd-mm-yyyy')
      if(this.weekData.length > 0 ){
        var flag = false;
        for (let j = 0; j < this.weekData.length;j++) {
          // console.log(this.datepipe.transform(this.weekData[j].attendedDate, 'dd-mm-yyyy'))
          var week = this.datepipe.transform(this.weekData[j].attendedDate, 'dd-mm-yyyy')
          if (saturday == week) {
            console.log('saturday',saturday)
            console.log('week',week)
           newData[i]=this.weekData[j]; 
           flag = true;
          } else {
            if(!flag){
              newData[i]={
                "attendedDate": this.allSaturdayDate[i].d,
                "created_By": '',
                "created_Date": '',
                "day": '',
                "description": '',
                "empId": '',
                "endTime": '',
                "id": 0,
                "modified_By": '',
                "modified_date": '',
                "month": '',
                "projectId": 0,
                "startTime": '',
                "totalHours": 0,
                "weekId": 0,
                "year": ''
              }
            }
            
          } 
        }
      }else{
        newData[i]={
          "attendedDate": this.allSaturdayDate[i].d,
          "created_By": '',
          "created_Date": '',
          "day": '',
          "description": '',
          "empId": '',
          "endTime": '',
          "id": 0,
          "modified_By": '',
          "modified_date": '',
          "month": '',
          "projectId": 0,
          "startTime": '',
          "totalHours": 0,
          "weekId": 0,
          "year": ''
        }
      }
    }
    // this.allSaturdayDate.filter(ele =>{
    //  var d = new Date(ele.d).getTime();
    //  console.log('gdsdhsdhhsfdh',d)
     
    //   this.weekData.filter(re=>{
    //     console.log('weedkkkkk')
    //     var e =  re.attendedDate.split('T');

    //     console.log(e)
    //     if(d == e){
    //       newData.push(re)
    //     }
    //   })
    // });

    console.log('new Data', newData)
    this.newSaturdayData = newData
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

  trackByMethod(index: number, el: any): number {
    return el.d;
  }

  // addPagePassData() {
  //   console.log(this.geValue)

  //   // const navigationExtras:NavigationExtras ={
  //   //   state:{
  //   //     range:this.geValue
  //   //   }
  //   // };
  //   this.router.navigateByUrl('/add-day-attendance', {
  //     state: { dateSelected: this.geValue }
  //   });
  // }

  onShow(event: any, data) {
    console.log(data);
    this.router.navigateByUrl('/adddayattendance', {
      state: { dateSelected: data }
    });
  }


}
