import { Route } from "@angular/router";
import { DetalleProyectoComponent } from "./modules/detalle-proyecto/detalle-proyecto.component";
import { HomeComponent } from "./modules/home/home.component";

export default [
  { path: '', component: HomeComponent },
  { path: 'detalle-proyecto/:proyecto', component: DetalleProyectoComponent },
  { path: '**', redirectTo: '' },] satisfies Route[];
