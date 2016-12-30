import { Routes, RouterModule }  from '@angular/router';

import { ArticlesComponent } from './articles.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
