import { Routes, RouterModule }  from '@angular/router';

import { FunctionForms } from './functionForms.component';
import { RegularForms } from './components/regularForms/regularForms.component';
import { ExtendedForms } from './components/extendedForms/extendedForms.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FunctionForms,
    children: [
      { path: 'regularForms', component: RegularForms },
      { path: 'extendedForms', component: ExtendedForms }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
