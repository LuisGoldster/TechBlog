import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './examples.routing';
import { Examples } from './examples.component';
import { RegularForms } from './components/regular-forms/regular-forms.component';
import { ExtendedForms } from './components/extended-forms/extended-forms.component';
import { UserProfile } from './components/user-profile/user-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Examples,
    RegularForms,
    ExtendedForms,
    UserProfile
  ],
  providers: []
})
export default class ExamplesModule {}
