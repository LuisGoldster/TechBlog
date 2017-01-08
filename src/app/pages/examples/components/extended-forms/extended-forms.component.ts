import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'extended-forms',
  encapsulation: ViewEncapsulation.None,
  template: require('./extended-forms.component.pug'),
})
export class ExtendedFormsComponent {

  constructor() {
  }
}
