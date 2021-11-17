import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { Camera, CameraOptions } from '@ionic-native/camera';
import { Camera, CameraResultType,CameraSource,Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ApiImage } from 'src/app/model/employeeDocument/employeeDocument.module';
import { updateemployee } from 'src/app/model/employee/updateEmployee.module';
import { ToastService } from 'src/app/services/toastMessage/toast.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
//import { Console } from 'console';
// import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
const IMAGE_DIR = 'stored-images';
// import {MatDialogModule} from '@angular/material/dialog';


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
  fileField:any;
  imageElement:any;
  fileName = '';
  imagefile:File;
  uploadProgress:number;
  uploadSub: Subscription;
  document:any;
  documentType: string;
  documentlist:any=[]
  //states:any=[]
  states: any=[
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", 
    "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry",
     "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"
    ]
  // dataService: any;
  // @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  constructor(private router:Router,
    private fb : FormBuilder,
    private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private navCtrl:NavController,
    private http: HttpClient,
    private toastService: ToastService,
    private loading:LoaderService,
    ) {

    this.empId = this.activatedRoute.snapshot.paramMap.get('empId');
    console.log(this.empId);

    //this.router.snapshot.params["id"];
    this.updateEmployee = this.fb.group({
    id:[''],
    empId:[''],
    empName:[''],
    email:[''],
    password:[''],
    mobileNumber:[''],
    document:[''],
    // gender:[''],
    department:[''],
    city:[''],
    state:[''],
    country:[''],
    pincode:[''],
    doj:[''],
    panNo:[''],
    adharNo:[''],
    role:[''],
    status:[''],
    designation: [''],
    dob:[''],
    bloodGroup:['']
      })
  }

  ngOnInit() {
    //this.empId="104";
    //this.fetchemployee(this.id);
    //this.updateeemployeeForm(this.id);
    // this.employeeService.getJSON().subscribe(data => {
    //   console.log(JSON.stringify(data.states));
    //   this.states = JSON.stringify(data.states)
    //   console.log("JSONDATA::"+this.states);
  // });
    
  }

  // fetchemployee(id){
  //   this.employeeService.getEmployeeId(id).subscribe((data) => {
  //     this.updateEmployee.setValue({
  //       empName:data['empName'],
  //       email:data['email'],
  //       password:data['password'],       
  //       department:data['department'],
  //       joindate:data['joindate'],
  //       addhar:data['addhar'],
  //       pancard:data['pancard'],
  //       document:data['document'],
  //       role:data['role'],
  //       status:data['status'],
  //       designation: data['designation'],
  //       mobileNumber: data['mobileNumber'],
  //       //gender:data['gender']
  //     });
  //   });
  // }

  // updateEmployeeForm(){
  
  //   this.employeeService.updateEmployeeDetail(this.id, this.updateEmployee.value)
  //       .subscribe(() => {
  //         this.updateEmployee.reset();
  //         this.router.navigate(['/home']);
  //       })

    
  // }

  ionViewDidEnter() {
    this.employeeService.getEmployeeId(this.empId).subscribe((response) => {
      this.employees = response;
      console.log(this.employees)
    });

    this.employeeService.getDocument(this.empId).subscribe((response)=>{
      console.log(response);
      this.documentlist = response
    });
  }
  back(){
    this.navCtrl.navigateBack('/employee');
  }

//  async getImage(){
//    const image= await Camera.getPhoto({
//      quality:90,
//      allowEditing:false,
//      resultType:CameraResultType.Base64,
//      source:CameraSource.Photos
//    });
//    console.log(image);

//    if(image){
//      this.saveImage(image);
//    }

//   }

//   async saveImage(photo:Photo){
//    const base64Data = '';
//     const fileName = new Date().getTime()+'.jpeg';
//     const saveFile =  await Filesystem.writeFile({
//       directory:Directory.Data,
//       path:`${IMAGE_DIR}/${fileName}`,
//       data:base64Data
//     })

//   }

  // takeFile(){
  //   const options = {
  //     resultType: CameraResultType.Uri,
  //   };
  //   Camera.getPhoto(options).then(
  //     (photo) => {
  //       console.log(photo);
  //       this.base64String = photo;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  onFileSelected(event) {
    // var documentType="pancard";

    // var empId ="UCS102";
    

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;
        console.log(file)
        this.imagefile=file

        
        //  const upload$ = this.http.post("http://49.50.69.37:8089/HRMSServices/uploadDocuments", formData).subscribe
        //  ((data)=>{
        //        console.log(data)
        //  })
        // {
        //   reportProgress: true,
        //         observe: 'events'
        //     })
        //     this.uploadSub = upload$.subscribe(event => {
        //       if (event.type == HttpEventType.UploadProgress) {
        //         this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        //       }
        //     })
       // }       
   // }

  //  const items = event.dataTransfer.items;
  //  for (let i = 0; i < items.length; i++) {
  //     const item = items[i];
  //     if (item.kind === 'file') {
  //        const entry = item.webkitGetAsEntry();
  //        if (entry.isFile) {
  //          //console.log('empty')
  //        } else if (entry.isDirectory) {
  //         //console.log(entry.isDirectory)
  //        }
  //     }
    }

}
uploadDoc(){
  // const formData:ApiImage ={
  //   document:this.file,
  //   documentType:this.documentType,
  //   empId:this.empId           
  // }
  let myformData=new FormData();
  myformData.append('document',this.imagefile);
  myformData.append('documentType',this.documentType);
  myformData.append('empId',this.employees.empId);
    this.http.post("http://49.50.69.37:8089/HRMSServices/uploadDocuments", myformData).subscribe((response)=>{
      console.log(JSON.stringify(["response",response]))
    
    });
    }


    updateEmployeeForm(){
    const id=this.updateEmployee.get('id').value
    //const empId = this.updateEmployee.get('empId').value
    const empName = this.updateEmployee.get('empName').value
    const email = this.updateEmployee.get('email').value
    const password = this.updateEmployee.get('password').value
    const mobileNumber = this.updateEmployee.get('mobileNumber').value
    const department = this.updateEmployee.get('department').value
    const city = this.updateEmployee.get('city').value
    const state = this.updateEmployee.get('state').value
    const pincode = this.updateEmployee.get('pincode').value
    const adharNo = this.updateEmployee.get('adharNo').value
    const panNo = this.updateEmployee.get('panNo').value
    const bloodGroup = this.updateEmployee.get('bloodGroup').value
    const role = this.updateEmployee.get('role').value
    const status = this.updateEmployee.get('status').value
    const designation = this.updateEmployee.get('designation').value
    const dob = this.updateEmployee.get('dob').value
    const doj = this.updateEmployee.get('doj').value
    const country = this.updateEmployee.get('country').value
    // const requestBody= `{empName:${dob},mobileNumber:${mobileNumber}}`
    // console.log(requestBody);
      const updateDetails:updateemployee={

        id:this.employees.id,
        empId:this.empId,
        empName:empName,
        email:email,
        adharNo:adharNo,
        bloodGroup:bloodGroup,
        city:city,
        country:country,
        department:department,
        designation:designation,
        dob:dob,
        doj:doj,
        mobileNumber:mobileNumber,
        panNo:panNo,
        password:password,
        pincode:pincode,
        role:role,
        state:state,
        status:status,        
      }
      
      console.log(updateDetails)
      this.employeeService.updateEmployeeDetail(updateDetails).subscribe((data:any)=>{
        this.toastService.presentToast('Employee Added');
        //this.router.navigate(['/home']);
        this.loading.dismiss();
        console.log("im in server",data)
        if(data.resCode = 200){
          //redirect dashboardpage
          this.loading.dismiss();
        }else{
          console.log("server not working");
          this.loading.dismiss();
        }
      });
      console.log("server not enter")
      
  
     // http://49.50.69.37:8089/HRMSServices/updateEmployees
    }
    
    // async openModal(){
    //   const modal = await this.modalCtrl.create({
    //     component:  
    //   })
  
    //   return await modal.present();
    // }

    documentUpload(){
      console.log(this.employees.empId);
      this.router.navigateByUrl('/upload-document', {
        state: { dateSelected: this.employees.empId }
      });
    }
}