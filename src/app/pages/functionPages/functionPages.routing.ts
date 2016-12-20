import { Routes, RouterModule }  from '@angular/router';

import { FunctionPages } from './functionPages.component';
import { UserProfile } from './components/userProfile/userProfile.component';
import { Articles } from './components/articles/articles.component';
import { Categories } from './components/categories/categories.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FunctionPages,
    children: [
      { path: '', redirectTo: 'userprofile', pathMatch: 'full' },
      { path: 'userprofile', component: UserProfile },
      { path: 'articles', component: Articles },
      { path: 'categories', component: Categories }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
