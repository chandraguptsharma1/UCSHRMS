import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // authState = new BehaviorSubject(false);
  // constructor(
  //   private router: Router,
  //   private storage: Storage,
  //   private platform: Platform,
  //   public toastController: ToastController
  // ) {
  //   this.platform.ready().then(() => {
  //     this.ifLoggedIn();
  //   });
  //  }

  //  ifLoggedIn() {
  //   if(localStorage.getItem('empId')!=null){
      
  //   }
  // }

  // isAuthenticated() {
  //   return this.authState.value;
  // }

}
