import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forgetPassword } from 'src/app/model/forgetPassword/forgetPassword.module';
import { ForgetPasswordService } from 'src/app/services/forgetpassword/forget-password.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  forgetForm:FormGroup;

  constructor(
    private fb : FormBuilder,
    private forgetpassword:ForgetPasswordService,
    private router:Router,
    private loading:LoaderService,
    private toastService: ToastService) { 
    this.forgetForm = this.fb.group({
      emailId:['',Validators.required]
    });

  }

  forgetPassword(){
    this.loading.present();
    const email = this.forgetForm.get('emailId').value
    const forgetPasswordDetail:forgetPassword= {
      email:email
    }
    console.log(forgetPasswordDetail);
    this.forgetpassword.forgetPassword(forgetPasswordDetail).subscribe((data:any)=>{
      if(data.resCode==200){
        this.toastService.presentToast("Check Your Password to this mail: "+email);
        this.router.navigate(['/login']);
        this.loading.dismiss();

      }else if(data.resCode==201){
        this.toastService.presentToast(" Mail Id Is Not Present: ");
        this.loading.dismiss();
      }else{
        this.toastService.presentToast("Server Error");
        this.loading.dismiss();
      }

     

    })
  }

  ngOnInit() {
  }

}
