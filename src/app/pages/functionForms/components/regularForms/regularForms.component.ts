import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'regular-forms',
  encapsulation: ViewEncapsulation.None,
  template: require('./regularForms.component.pug'),
})
export class RegularForms {

  constructor() {
  }
}
