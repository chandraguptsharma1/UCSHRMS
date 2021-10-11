import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // formGroup:FormGroup;
  // newTaskForm: FormGroup;
  LoginUserData: FormGroup



  LoginProcess(){
    this.authService.UserLogin(this.LoginUserData.value).subscribe(data => {
        console.log("im Serve")
    }
    // console.log(this.newTaskForm.value)
    // console.log(this.formGroup.value)
    // if(this.formGroup.valid){
    //   this.authService.login(this.formGroup.value).subscribe(result=>{
    //     if(result.success){
    //       console.log(result);
    //       alert(result.message);
    //     }else{
    //       alert(result.message);
    //     }
    //   })
    // }
    )
  }



 

  constructor(private authService:AuthService,private formBuilder: FormBuilder,
    private userService:AuthService,) {
    // this.formGroup = new FormGroup({
    //   empId:new FormControl('',[Validators.required]),
    //   password:new FormControl('',[Validators.required])
    // })
  //   this.newTaskForm = fb.group({
  //     empId: ["", Validators.required],
  //     password:["", Validators.required]
  // });

  // this.LoginUserData = this.fb.group({
  //   email: ['', [Validators.required, ]],
  //   password: ['', [Validators.required,]]
  // })
   }
   caredentailsform:FormGroup;
  ngOnInit() {

    this.caredentailsform =  this.formBuilder.group({
      empId:['',[Validators.required]],
      password:['',[Validators.required],Validators.minLength(5)]
    })
  }

  onSubmit(){
    this.authService.UserLogin(this.caredentailsform.value).subscribe(data=>{
      console.log("im in server")
    });
  }

}
