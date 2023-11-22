import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ProyectosService } from 'src/app/core/services/proyectos.service';

@Component({
  selector: 'app-proyectos-recientes',
  templateUrl: './proyectos-recientes.component.html',
  styleUrls: ['./proyectos-recientes.component.css']
})
export class ProyectosRecientesComponent implements OnInit {
  recientes: Proyecto[];

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
    this.recientes = this.proyectoService.Proyectos.filter((e: Proyecto) => e.isReciente);
  }

}
