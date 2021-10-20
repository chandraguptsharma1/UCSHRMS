import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toastMessage/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(private toastService: ToastService,private fb : FormBuilder,private authService:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      empId:['',Validators.required],
      password:['',Validators.required]
    })
   }
  ngOnInit(): void {
    
  }

  submitLoginForm(){
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
        this.toastService.presentToast('Welcome '+data.resName);
        this.router.navigate(['/home']);


      }else{
        this.toastService.presentToast('Either EmpId Or Password Wrong.');
        this.router.navigate(['/login']);

      }
    });
  }

}
