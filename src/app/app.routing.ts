import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/index';
import { NoContentComponent } from './pages/no-content/index';
import { AuthGuard } from './guards/index';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    component: NoContentComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
