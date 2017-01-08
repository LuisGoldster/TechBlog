import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'articles',
  encapsulation: ViewEncapsulation.None,
  template: require('./articles.component.pug'),
})
export class ArticlesComponent {

  constructor() {
  }
}
