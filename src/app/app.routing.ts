import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './pages/no-content/no-content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NoContentComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
