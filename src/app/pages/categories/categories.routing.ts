import { Routes, RouterModule }  from '@angular/router';

import { Categories } from './categories.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Categories,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
