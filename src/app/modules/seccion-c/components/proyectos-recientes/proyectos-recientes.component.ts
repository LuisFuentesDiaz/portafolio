import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ProyectosService } from 'src/app/core/services/proyectos.service';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-proyectos-recientes',
  templateUrl: './proyectos-recientes.component.html',
  styleUrls: ['./proyectos-recientes.component.css']
})
export class ProyectosRecientesComponent implements OnInit {

  @Input() isMovil: boolean = false;
  recientes: Proyecto[];

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
    console.log(this.isMovil);

    this.recientes = this.proyectoService.Proyectos.filter((e: Proyecto) => e.isReciente);

  }
}
