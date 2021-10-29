import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';
// import {FileChooser} from "@ionic-native/file-chooser/ngx";
// import {FilePath} from "@ionic-native/file-path/ngx";
// import { Plugins } from '@capacitor/core';
// const {Filesystem} = Plugins;
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {
  updateEmployee: FormGroup
  snapshot:any;
  empId:any;
  id:any;
  employees:any=[];
  base64String:any="";

  constructor(private router:Router,
    private fb : FormBuilder,
    private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private navCtrl:NavController,
   
    ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    //this.router.snapshot.params["id"];
    this.updateEmployee = this.fb.group({
      empName:[''],
      email:[''],
      password:[''],
    //  mobileNumber:[''],
      department:[''],
      joindate:[''],
      addhar:[''],
      pancard:[''],
      document:[''],
      role:[''],
      status:[''],
      designation: ['']
      })
  }

  ngOnInit() {
    this.empId="104";
    this.fetchemployee(this.id);
    //this.updateeemployeeForm(this.id);
    
  }

  fetchemployee(id){
    this.employeeService.getEmployeeId(id).subscribe((data) => {
      this.updateEmployee.setValue({
        empName:data['empName'],
        email:data['email'],
        password:data['password'],       
        department:data['department'],
        joindate:data['joindate'],
        addhar:data['addhar'],
        pancard:data['pancard'],
        document:data['document'],
        role:data['role'],
        status:data['status'],
        designation: data['designation']     
      });
    });
  }

  updateEmployeeForm(){
    // const empName = this.updateEmployee.get('empName').value
    // const email = this.updateEmployee.get('email').value
    // const password = this.updateEmployee.get('password').value
    // const department = this.updateEmployee.get('department').value
    // const joindate = this.updateEmployee.get('joindate').value
    // const addhar = this.updateEmployee.get('addhar').value
    // const pancard = this.updateEmployee.get('pancard').value
    // const dob = this.updateEmployee.get('dob').value
    // //const document = this.updateEmployee.get('document').value
    // const role = this.updateEmployee.get('role').value
    // const status = this.updateEmployee.get('status').value
    // const designation = this.updateEmployee.get('designation').value
    // //const requestBody= `{empName:${dob},mobileNumber:${mobileNumber}}`
    // const requestBody= `{empName:${empName}}`
    // console.log(requestBody);

    // const updateemployeeDetails:updateemployee = {
    //   empName:empName,
    //  empId:this.empId,
    //   email:email,
    //   dob:dob,
    //   department:department,
    //   adharNo:addhar,
    //   designation:designation,
    //   doj:joindate,
    //   panNo:pancard,
    //   password:password,
    //   role:role,
    //   status:status,
    // }
    // console.log(updateemployeeDetails)
    this.employeeService.updateEmployeeDetail(this.id, this.updateEmployee.value)
        .subscribe(() => {
          this.updateEmployee.reset();
          this.router.navigate(['/home']);
        })

    // this.employeeService.updateEmployeeDetail(updateemployeeDetails).subscribe((data:any)=>{

    //   console.log("im in server",data)
    //   if(data.resCode = 200){
    //     //redirect dashboardpage
    //   }else{
    //     console.log("server not working")
    //   }
    // });
  }

  ionViewDidEnter() {
    this.employeeService.getEmployeeId(this.id).subscribe((response) => {
      this.employees = response;
      console.log(this.employees)
    })
  }
  back(){
    this.navCtrl.navigateBack('/employee');
  }

  // pickFile(){
  //   this.fileChooser.open().then((val)=>{
  //     this.filePath.resolveNativePath(val).then((path)=>{
  //       Filesystem.readFile({
  //         path:path
  //       }).then((base64)=>{
  //         this.base64String = "data:image/png;base64,"+base64.data;
  //       })
  //     })
  //   })
  // }

  takeFile(){
    const options = {
      resultType: CameraResultType.Uri,
    };
    Camera.getPhoto(options).then(
      (photo) => {
        console.log(photo);
        this.base64String = photo;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}




