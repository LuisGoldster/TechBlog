import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-profile',
  encapsulation: ViewEncapsulation.None,
  template: require('./user-profile.component.pug'),
})
export class UserProfileComponent {

  constructor() {
  }
}
