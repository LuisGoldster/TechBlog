import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TbThemeConfig } from './theme.config';
import { TbThemeConfigProvider } from './theme.configProvider';

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface
} from 'angular2-perfect-scrollbar';

import {
  TbMenuItem,
  TbMenu,
  TbSidebar
} from './components';

import {
  TbImageLoaderService,
  TbThemePreloader,
  TbThemeSpinner
} from './services';

const NGA_COMPONENTS = [
  TbMenuItem,
  TbMenu,
  TbSidebar
];

const NGA_SERVICES = [
  TbImageLoaderService,
  TbThemePreloader,
  TbThemeSpinner
];

@NgModule({
  declarations: [
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule.forChild()
  ],
  exports: [
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        TbThemeConfigProvider,
        TbThemeConfig,
        ...NGA_SERVICES
      ],
    };
  }
}
