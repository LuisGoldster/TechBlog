import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'regular-forms',
  encapsulation: ViewEncapsulation.None,
  template: require('./regular-forms.component.pug'),
})
export class RegularFormsComponent {

  constructor() {
  }
}
