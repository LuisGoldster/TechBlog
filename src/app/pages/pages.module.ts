import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/index';
import { NoContentComponent } from './no-content/index';

import { AuthGuard } from '../guards/index';

import { AuthenticationService } from '../services/index';

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface
} from 'angular2-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    NoContentComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})
export class PagesModule {
}
