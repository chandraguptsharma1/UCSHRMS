import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forgetPassword } from 'src/app/model/forgetPassword/forgetPassword.module';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  forgetForm:FormGroup;

  constructor(private fb : FormBuilder) { 
    this.forgetForm = this.fb.group({
      emailId:['',Validators.required]
    });

  }

  forgetPassword(){
    const email = this.forgetForm.get('emailId').value
    const forgetPasswordDetail:forgetPassword= {
      email:email
    }
    console.log(forgetPasswordDetail);
  }

  ngOnInit() {
  }

}
