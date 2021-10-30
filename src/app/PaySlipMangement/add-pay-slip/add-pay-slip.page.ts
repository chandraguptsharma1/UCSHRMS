import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as XLSX from 'xlsx';
import { PayslipService } from 'src/app/services/empPayslip.service';

@Component({
  selector: 'app-add-pay-slip',
  templateUrl: './add-pay-slip.page.html',
  styleUrls: ['./add-pay-slip.page.scss'],
})
export class AddPaySlipPage implements OnInit {
  uploadText:any;
  name = 'This is XLSX TO JSON CONVERTER';
  willDownload = false;
  document:any;
  documentType:any;
  empId:any;
  uploadfile:any;
  jsonall:any;
  jsonData:any

  constructor(  private uploadf:PayslipService) {

     }

  ngOnInit() {
    this.documentType = "xl";
    this.empId = "102";
  }
  onFileChange(ev: any) {
    let workBook: any = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, {
        type: 'binary',
        cellDates: true,
        cellNF: false,
        cellText: false
      });
      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      console.log('dataString', dataString)
      this.jsonData = dataString;
      // this.saveFile(dataString)
    }
    reader.readAsBinaryString(file);
  }
  onFileChange1(ev) {
    let workBook = null;
    let jsonData = null;
    let dataall = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      // console.log(data);

      workBook = XLSX.read(data, { type: 'binary' });
      // console.log(workBook);
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      // console.log(jsonData);
      const dataString = JSON.stringify(jsonData);
      this.jsonall = dataString;

      console.log('jsonData',this.jsonall);

      document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      // this.setDownload(dataString);
      this.uploadfile = dataString;
    }
    reader.readAsBinaryString(file);

  }

  saveFile(): void{



    this.uploadf.UploadFile(this.jsonData).subscribe((data:any)=>{

       console.log('uploaded===>',data)
    })
  }


}

