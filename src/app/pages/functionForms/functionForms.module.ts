import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './functionForms.routing';
import { FunctionForms } from './functionForms.component';
import { RegularForms } from './components/regularForms/regularForms.component';
import { ExtendedForms } from './components/extendedForms/extendedForms.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    FunctionForms,
    RegularForms,
    ExtendedForms,
  ],
  providers: []
})
export default class FunctionFormsModule {}
