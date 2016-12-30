import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './examples.routing';
import { ExamplesComponent } from './examples.component';
import { RegularFormsComponent } from './components/regular-forms/index';
import { ExtendedFormsComponent } from './components/extended-forms/index';
import { UserProfileComponent } from './components/user-profile/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ExamplesComponent,
    RegularFormsComponent,
    ExtendedFormsComponent,
    UserProfileComponent
  ],
  providers: []
})
export default class ExamplesModule {}
