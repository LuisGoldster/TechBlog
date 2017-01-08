import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'categories',
  encapsulation: ViewEncapsulation.None,
  template: require('./categories.component.pug'),
})
export class CategoriesComponent {

  constructor() {
  }
}
