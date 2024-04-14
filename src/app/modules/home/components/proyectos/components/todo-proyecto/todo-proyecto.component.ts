import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Habilidad } from 'src/app/core/models';
import { Proyecto } from 'src/app/core/models';
import { ProyectosService } from 'src/app/core/services';
import { ProyectoComponent } from '../proyecto/proyecto.component';

@Component({
  selector: 'app-todo-proyecto',
  templateUrl: './todo-proyecto.component.html',
  styleUrls: ['./todo-proyecto.component.css'],
  standalone: true,
  imports: [ProyectoComponent, NgFor]
})
export class TodoProyectoComponent implements OnInit, OnChanges {
  @Input() isMovil: boolean = false;
  @Input() filtro: Habilidad = null;
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
    this.cargarProyectos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtro']) {
      this.cargarProyectos();
    }
  }

  cargarProyectos(): void {
    this.proyectos = this.proyectoService.getProyectos().filter(p => this.filtro ? p.tecnologias.includes(this.filtro) : true);
  }
}
