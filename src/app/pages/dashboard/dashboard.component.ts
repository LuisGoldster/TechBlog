import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  template: require('./dashboard.component.pug')
})
export class DashboardComponent {

  constructor() {
  }

}
