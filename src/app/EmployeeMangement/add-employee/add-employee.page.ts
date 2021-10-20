import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { employee } from 'src/app/model/employee.module';
import { EmployeeService } from 'src/app/services/employee.service';





@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  employeeForm: FormGroup;
  employee:any={};

  
  

  //constructor(private router:Router,private fb : FormBuilder,private authService:EmployeeService) { 
    constructor(private router:Router,private fb : FormBuilder,private employeeService:EmployeeService) { 
    this.employeeForm = this.fb.group({
    empName:[''],
    email:[''],
    password:[''],
    mobileNumber:[''],
    gender:[''],
    department:[''],
    address:[''],
    landmark:[''],
    pincode:[''],
    joindate:[''],
    addhar:[''],
    pancard:[''],
    document:[''],
    role:[''],
    status:[''],
    designation: [''],
    dob:['']

    })
  }

  submitEmployeeForm(){

    const empName = this.employeeForm.get('empName').value
    const email = this.employeeForm.get('email').value
    const password = this.employeeForm.get('password').value
    const mobileNumber = this.employeeForm.get('mobileNumber').value
    const gender = this.employeeForm.get('gender').value
    const department = this.employeeForm.get('department').value
    const address = this.employeeForm.get('address').value
    const landmark = this.employeeForm.get('landmark').value
    const pincode = this.employeeForm.get('pincode').value
    const joindate = this.employeeForm.get('joindate').value
    const addhar = this.employeeForm.get('addhar').value
    const pancard = this.employeeForm.get('pancard').value
    const document = this.employeeForm.get('document').value
    const role = this.employeeForm.get('role').value
    const status = this.employeeForm.get('status').value
    const designation = this.employeeForm.get('designation').value
    const dob = this.employeeForm.get('dob').value
    const requestBody= `{empName:${dob},mobileNumber:${mobileNumber}}`
    console.log(requestBody);

    // const empId = '101'
    // const empName = 'test'
    // const password = 'test'
    // const mobileNumber = '7777788888'
    // const role = 'eng'
    // // const dob = 1994-12-15
    // // const doj = 2021-12-11
    // const designation = 'SE'
    // const department = 'IT'
    // const panNo = 'ewipp5548'
    // const adharNo = '82497315'
    // const status = 'active'
    // const email = 'sreelekha.pathipati@upvoteconsulting.com'

    //const id = this.employeeForm.get('id').value
    // const empId = '101'
    // const empName = this.employeeForm.get('empName').value
    // const password = this.employeeForm.get('password').value
    // const mobileNumber = this.employeeForm.get('mobileNumber').value
    // const role = this.employeeForm.get('role').value
    // const dob = this.employeeForm.get('dob').value
    // const doj = this.employeeForm.get('doj').value
    // const designation = this.employeeForm.get('designation').value
    // const department = this.employeeForm.get('department').value
    // const panNo = this.employeeForm.get('panNo').value
    // const adharNo = this.employeeForm.get('adharNo').value
    // const status = this.employeeForm.get('status').value
    // const email = this.employeeForm.get('email').value
    // const requestBody= `{empName:${empName},mobileNumber:${mobileNumber}}`
    console.log(requestBody);
    const employeeDetails:employee = {
      empName:empName,
      empId:this.empId,
      email:email,
      dob:dob,
      department:department,
      adharNo:addhar,
      designation:designation,
      doj:joindate,
      panNo:pancard,
      password:password,
      role:role,
      status:status,
      
   
    }
    console.log(employeeDetails)
    this.employeeService.EmployeeDetail(employeeDetails).subscribe((data:any)=>{

      console.log("im in server",data)
      if(data.resCode = 200){
        //redirect dashboardpage
      }else{
        //again redirrect to login page
      }
    });
  }

  
  
  empId:string;
 

  ngOnInit() {
    this.empId='101';
    console.log("EmployeeId",this.empId);
  }

  // submitImage(){
  //   this.fileChooser.open()
  // .then(uri => console.log(uri))
  // .catch(e => console.log(e));
  // }

  

}

