import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProyectoComponent } from './modules/detalle-proyecto/detalle-proyecto.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirige a '/detalle-proyecto' al inicio
  { path: 'detalle-proyecto/:proyecto', component: DetalleProyectoComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
