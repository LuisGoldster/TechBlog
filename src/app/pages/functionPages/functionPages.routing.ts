import { Routes, RouterModule }  from '@angular/router';

import { FunctionPages } from './functionPages.component';
import { UserProfile } from './components/userProfile/userProfile.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FunctionPages,
    children: [
      { path: '', redirectTo: 'userprofile', pathMatch: 'full' },
      { path: 'userprofile', component: UserProfile }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
