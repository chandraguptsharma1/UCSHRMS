import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  // constructor(
  //   public authenticationService: AuthenticateService
  // ) { }

  // canActivate(): boolean {
  //   return this.authenticationService.isAuthenticated();
  // }
}
