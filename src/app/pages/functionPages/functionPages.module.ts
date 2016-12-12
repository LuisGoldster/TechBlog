import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './functionPages.routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FunctionPages } from './functionPages.component';
import { UserProfile } from './components/userProfile/userProfile.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
    FunctionPages,
    UserProfile
  ]
})
export default class FunctionPagesModule {
}
