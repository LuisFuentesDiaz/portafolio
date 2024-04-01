import { Route } from "@angular/router";
import { DetalleProyectoComponent } from "./modules/detalle-proyecto/detalle-proyecto.component";
import { HomeComponent } from "./modules/home/home.component";

export default [
  { path: '', component: HomeComponent },
  {
    path: 'detalle-proyecto/:proyecto', loadComponent: () =>
      import('./modules/detalle-proyecto/detalle-proyecto.component').then(c => c.DetalleProyectoComponent)
  },
  { path: '**', redirectTo: '' },] satisfies Route[];
