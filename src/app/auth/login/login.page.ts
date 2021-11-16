import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loading/loader.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(
    private toastService: ToastService,
    private fb : FormBuilder,
    private authService:AuthService,
    private router:Router,
    private loading:LoaderService ) {
    this.loginForm = this.fb.group({
      empId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
   }

   validation_messages = {
    'empId': [
      { type: 'required', message: 'empId is required.' },
      { type: 'minlength', message: 'empId must be at least 5 characters long.' },
      { type: 'maxlength', message: 'empId cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your empId must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your empId has already been taken.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must be at least 5 characters long.' },
    ],
    
    
    
    }
  ngOnInit(): void {
    
  }

  submitLoginForm(){
    this.loading.present();
    const empId = this.loginForm.get('empId').value
    const password = this.loginForm.get('password').value
    const requestBody= `{empId:${empId},password:${password}}`
    // console.log(requestBody);
    const userDetails:User = {
      empId:empId,
      password:password
    }
    console.log(userDetails)
    this.authService.UserLogin(userDetails).subscribe((data:any)=>{
      
      console.log("im in server",data)
      // if(data.resCode = 200){
      //   this.toastService.presentToast('Not A Valid User.');
      if(data.resCode==200){
        localStorage.setItem('empId',data.resEmpId);
        localStorage.setItem('empName',data.resName);
        localStorage.setItem('empRole',data.resRole);
        this.toastService.presentToast('Welcome '+data.resName);
        this.router.navigate(['/home']);
        this.loading.dismiss();


      }else if(data.resCode == 201){
        this.toastService.presentToast('Either EmpId Or Password Wrong.');
        this.router.navigate(['/login']);
        this.loading.dismiss();

      }else if(data.resCode== null){
        this.toastService.presentToast('Insert correct credencial');
        this.loading.dismiss();
      }
    });
  }

}
