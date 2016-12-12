import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'user-profile',
  encapsulation: ViewEncapsulation.None,
  template: require('./userProfile.component.pug'),
})
export class UserProfile {

  constructor() {
  }
}
