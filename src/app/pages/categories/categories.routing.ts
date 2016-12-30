import { Routes, RouterModule }  from '@angular/router';

import { CategoriesComponent } from './categories.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
