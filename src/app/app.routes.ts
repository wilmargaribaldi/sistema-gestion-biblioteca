import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libro/:id', component: DetalleLibroComponent },
  { path: '**', redirectTo: '' },
];
