import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticateService } from './services/authenticate/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,   
    
  ) {
    // this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
     


  //     this.authenticationService.authState.subscribe(state => {
  //       if (state) {
  //         this.router.navigate(['home']);
  //       } else {
  //         this.router.navigate(['login']);
  //       }
  //     });

  //   });
  // }
}
