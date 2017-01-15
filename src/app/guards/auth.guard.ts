import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/index';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.loggedIn()) {
      // logged in so return true
      return true;
    } else {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
