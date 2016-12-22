import { Routes, RouterModule }  from '@angular/router';

import { Examples } from './examples.component';
import { RegularForms } from './components/regular-forms/regular-forms.component';
import { ExtendedForms } from './components/extended-forms/extended-forms.component';
import { UserProfile } from './components/user-profile/user-profile.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Examples,
    children: [
      { path: '', redirectTo: 'regular', pathMatch: 'full' },
      { path: 'regular', component: RegularForms },
      { path: 'extended', component: ExtendedForms },
      { path: 'userprofile', component: UserProfile },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
