import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
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
    component: Pages,
    children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => System.import('./dashboard/dashboard.module')
      }, {
        path: 'articles',
        loadChildren: () => System.import('./articles/articles.module')
      }, {
        path: 'categories',
        loadChildren: () => System.import('./categories/categories.module')
      }, {
        path: 'pages',
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
