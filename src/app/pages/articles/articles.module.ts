import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ArticlesComponent } from './articles.component';
import { routing } from './articles.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ArticlesComponent
  ],
  providers: []
})
export default class ArticlesModule {}
