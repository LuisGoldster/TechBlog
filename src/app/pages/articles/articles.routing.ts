import { Routes, RouterModule }  from '@angular/router';

import { Articles } from './articles.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Articles,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
