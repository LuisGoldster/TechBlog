import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { CategoriesComponent } from './categories.component';
import { routing } from './categories.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    CategoriesComponent
  ],
  providers: []
})
export default class CategoriesModule {}
