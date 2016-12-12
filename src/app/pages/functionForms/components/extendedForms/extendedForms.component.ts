import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'extended-forms',
  encapsulation: ViewEncapsulation.None,
  template: require('./extendedForms.component.pug'),
})
export class ExtendedForms {

  constructor() {
  }
}
