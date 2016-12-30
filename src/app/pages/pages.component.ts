import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./page.component.pug'),
})
export class PagesComponent {

  constructor() {
  }

  ngOnInit() {
  }
}
