import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libro/:id', component: DetalleLibroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];
