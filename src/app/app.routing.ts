import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/index'
import { NoContentComponent } from './pages/no-content/index';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoContentComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
