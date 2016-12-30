import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  template: require('./login.component.pug')
})
export class LoginComponent {

  constructor() {
  }
  
}