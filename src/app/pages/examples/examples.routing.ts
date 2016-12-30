import { Routes, RouterModule }  from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { RegularFormsComponent } from './components/regular-forms/index';
import { ExtendedFormsComponent } from './components/extended-forms/index';
import { UserProfileComponent } from './components/user-profile/index';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      { path: '', redirectTo: 'regular', pathMatch: 'full' },
      { path: 'regular', component: RegularFormsComponent },
      { path: 'extended', component: ExtendedFormsComponent },
      { path: 'userprofile', component: UserProfileComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
