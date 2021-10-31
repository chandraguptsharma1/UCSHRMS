import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from 'src/app/model/attendance.module';
import { AddAttendance } from 'src/app/model/attendance/addAttendance.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private Api_url = environment.baseUrl
  constructor(private http:HttpClient) { }

  UserAttendance(attendanceDetails:AddAttendance){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
    return this.http.post<AddAttendance>(`${this.Api_url}addDayAttendence`,attendanceDetails,{ 'headers': headers });
  }
}
