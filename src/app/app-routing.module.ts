import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProyectoComponent } from './modules/detalle-proyecto/detalle-proyecto.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'portafolio', component: HomeComponent },
  { path: 'detalle-proyecto/:proyecto', component: DetalleProyectoComponent },
  { path: '**', redirectTo: 'portafolio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
