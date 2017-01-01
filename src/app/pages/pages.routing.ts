import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/index';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => System.import('./login/login.module')
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => System.import('./register/register.module')
  // },
  {
    path: '',
    component: PagesComponent,
    children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      }, {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => System.import('./dashboard/dashboard.module')
      }, {
        path: 'articles',
        canActivate: [AuthGuard],
        loadChildren: () => System.import('./articles/articles.module')
      }, {
        path: 'categories',
        canActivate: [AuthGuard],
        loadChildren: () => System.import('./categories/categories.module')
      }, {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: () => System.import('./examples/examples.module')
      }
      // { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      // { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      // { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      // { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      // { path: 'maps', loadChildren: () => System.import('./maps/maps.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
