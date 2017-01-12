import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/index';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  template: require('./login.component.pug')
})
export class LoginComponent {

  private model: any = {};
  private loading: boolean = false;
  private error: string = '';

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
    }

}
