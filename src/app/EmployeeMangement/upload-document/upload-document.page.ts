import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.page.html',
  styleUrls: ['./upload-document.page.scss'],
})
export class UploadDocumentPage implements OnInit {
  imagefile:File;
  fileName = '';
  documentType: string;
  id:any;
  empId:any;

  constructor(private modalCtr: ModalController,
    private http: HttpClient,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private navCtrl:NavController ) { 
      // this.id = this.activatedRoute.snapshot.paramMap.get('empId');
    // console.log(this.id);
  }

  ngOnInit() {
    // this.id="UCS103"
    console.log('>empId',this.router.getCurrentNavigation().extras.state);
    var empid = this.router.getCurrentNavigation().extras.state;
    console.log(JSON.stringify(empid.dateSelected));
    this.id =empid.dateSelected;
  }

  closeModal(){
    this.modalCtr.dismiss();
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;
        console.log(file)
        this.imagefile=file
       
    }

}

  uploadDoc(){
    let myformData=new FormData();
    myformData.append('document',this.imagefile);
    myformData.append('documentType',this.documentType);
    myformData.append('empId',this.id);
      this.http.post("http://49.50.69.37:8089/HRMSServices/uploadDocuments", myformData).subscribe((response)=>{
        console.log(JSON.stringify(["response",response]))
        var res  = JSON.stringify(response);
        console.log(res);
        this.router.navigate(['/update-employee-details/'+this.id]);
      });
      }

      back(){
        this.navCtrl.navigateBack('/employee');
      }
}

