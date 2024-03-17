import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class Utiles {

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  proyectosService: ProyectosService = inject(ProyectosService);

  public proyectoSiguiente(id: number): void {
    let cantidadProyectos: number = this.proyectosService.getCantidadProyectos();
    this.router.navigate([`detalle-proyecto/${this.calculaSiguienteProyecto(id ?? Number.parseInt(this.route.snapshot.params["proyecto"]), cantidadProyectos)}`]);
    console.log("");
  }

  public proyectoAnterior(id: number): void {
    let cantidadProyectos: number = this.proyectosService.getCantidadProyectos();
    this.router.navigate([`detalle-proyecto/${this.calculaAnteriorProyecto(id ?? this.route.snapshot.params["proyecto"], cantidadProyectos)}`]);
  }

  public calculaSiguienteProyecto(actual: number, totales: number): number {
    if (actual < totales) return actual + 1;
    return 1;
  }

  public calculaAnteriorProyecto(actual: number, totales: number): number {
    if (actual > 1) return actual - 1;
    return totales;
  }
}
